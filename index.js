"use strict";

const fs = require('fs')
const puppeteer = require('puppeteer')
const {URL} = require('url')
require('events').EventEmitter.defaultMaxListeners = 5

const inputFile = 'favourite.csv'
const outputFile = 'favourite.json'
const NUM_PER_FETCH = 5

// Chunks an array into smaller arrays of a specified size.(30-seconds-of-code)
const chunk = (arr, size) =>
  Array.from({length: Math.ceil(arr.length / size)}, (v, i) =>
    arr.slice(i * size, i * size + size)
  )

// Converts a comma-separated values (CSV) string to a 2D array. (30-seconds-of-code)
const CSVToArray = (data, delimiter = ',', omitFirstRow = false, newlineChar = /\r?\n/) =>
  data
    .slice(omitFirstRow ? data.indexOf(newlineChar) + 1 : 0)
    .split(newlineChar)
    .map(v => v.split(delimiter));

class Scraper {
  constructor (title, year, timeout = 3600000, baseURL = 'https://www.imdb.com', relativeURL = '/search/title', exact = true, genres = 'documentary') {
    this.title = title
    this.year = year
    this.timeout = timeout
    this.baseURL = baseURL
    this.relativeURL = relativeURL
    this.exact = exact
    this.genres = genres
  }

  async fetch () {
    const {title, year, timeout, baseURL, relativeURL, exact, genres} = this
    // Format url and queries according to IMDB
    const url = new URL(`${baseURL}${relativeURL}`)
    url.searchParams.set('title', title)
    url.searchParams.set('release_date', Number(year))
    url.searchParams.append('exact', exact.toString())
    url.searchParams.append('genres', genres)

    // Create a browser instance
    const browser = await puppeteer.launch({
      // executablePath: 'D:\\Bin\\chrome-win\\chrome.exe',  // separately downloaded chromium
      headless: false
    })

    // Initiate a page inside the browser
    const page = await browser.newPage()

    // Navigate to the website
    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout
    })
    await page.waitFor(500)

    await page.click(`[class = "lister-item-image float-left"]`).catch(err => console.log(err))
    await page.waitForNavigation({
      waitUntil: 'networkidle0',
      timeout
    })
    await page.waitFor(500)

    const docDetail = await page.evaluate(() => {
      const ratingValue = document.querySelector(`[itemprop = "ratingValue"]`).innerText
      const ratingCount = document.querySelector(`[itemprop = "ratingCount"]`).innerText
      const countryNode = [...document.querySelectorAll(`#titleDetails > div > h4`)].find(ele => ele.innerText.includes('Country'))
      const country = countryNode ? Array.from(countryNode.parentNode.querySelectorAll('a'), ele => ele.innerText) : ""

      const summary = document.querySelector(`[class = "summary_text"]`)
      const _summaryLink = summary.getElementsByTagName('a')
      const summaryText = summary.innerText
      let summaryLink = ''
      if (_summaryLink.length > 0 && _summaryLink[0].innerText.includes('summary')) {
        summaryLink = _summaryLink[0].getAttribute('href')
      }

      return {
        country,
        summaryText,
        summaryLink,
        ratingValue,
        ratingCount
      }
    }).catch(err => console.log(err))

    const docResource = page.url()

    await page.click(`[class = "poster"]`).catch(err => console.log(err))
    await page.waitForNavigation({
      waitUntil: 'networkidle0',
      timeout
    })
    await page.waitFor(500)

    const poster = await page.evaluate(() => {
      let img = document.querySelectorAll(`[class="pswp__img"]`)
      img = img.length > 1 ? img[1] : img[0]

      const detail = document.querySelector(`[data-reactid=".0.4.$=1$footer.0.1"]`)

      const detailLink = detail.getElementsByTagName('a')
      let detailText = detailLink.length > 1 ? detailLink[1].innerText : detailLink[0].innerText

      return {
        img: img.getAttribute('src'),
        detail: detailText
      }
    }).catch(err => console.log(err))

    const {img, detail} = poster

    // extract title and year
    const yearRe = /\b\d{4}\b/g
    const yearArr = yearRe.exec(detail)
    const docYear = yearArr[0]
    const docTitle = detail.slice(0, yearArr.index - 2)

    // Extract image title from image link
    const imgTitle = img.slice(img.lastIndexOf('/') + 1)

    // Save image
    const imgSource = await page.goto(img)
    fs.writeFile(`./cover/${imgTitle}`, await imgSource.buffer(), err => {
      if (err) return console.log(err)
    })

    // Get full summary text
    if (docDetail.summaryLink) {
      console.log(`${baseURL}${docDetail.summaryLink}`)
      await page.goto(`${baseURL}${docDetail.summaryLink}`, {
        waitUntil: 'networkidle2',
        timeout
      })
      await page.waitFor(500)
      docDetail.summaryText = await page.evaluate(() => document.querySelector('#plot-summaries-content > li > p').innerText)
    }

    await browser.close()
    return {docResource, docTitle, docYear, imgTitle, ...docDetail}
  }
}

// Execute immediately
(async () => {
  const documentaries = []
  let promises = []

  // Convert csv to array
  const CSV = fs.readFileSync(inputFile, 'utf8')
  const ARR = CSVToArray(CSV)
  // Separate array into small chunks to fetch concurrently
  const chunkArray = chunk(ARR, NUM_PER_FETCH)

  for (let arr of chunkArray) {
    console.log(arr)
    arr.forEach(ele => {
      ele[0] && promises.push(new Scraper(ele[0], ele[1]).fetch())
    })
    await Promise.all(promises).then(res => res.forEach(ele => documentaries.push(ele))).catch(err => console.log(err))
    // Clear promise array
    promises = []
  }
  // Write result to json
  fs.writeFileSync(outputFile, JSON.stringify(documentaries))
})()

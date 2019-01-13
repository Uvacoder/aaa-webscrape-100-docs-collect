const favourite = require('./favourite')

const lineBreak = '\r\n'
let table = ''

// table header
table += `| Index | Title | Year | Rating | Votes | ${lineBreak}`
table += `| --- | --- | --- | --- | --- | ${lineBreak}`

// table rows
favourite.sort((a, b) => parseFloat(b.ratingValue) - parseFloat(a.ratingValue))
  .forEach((doc, index) => table += `| ${index + 1} | [${doc.docTitle}](${doc.docResource}) | ${doc.docYear} | ${doc.ratingValue} | ${doc.ratingCount} | ${lineBreak}`)

console.log(table)
# leaf
Scrape 100 Documentaries from [IMDB](https://www.imdb.com/?ref_=nv_home) with [Puppeteer](https://github.com/GoogleChrome/puppeteer).

## Project structure

```bash
leaf
  ├── .gitignore               git ignore configuration
  ├── favourite.scv            csv format of documentaries
  ├── index.js                 main scrape script
  ├── js_to_md.js              convert json format to markdown table
  ├── package.json             package management
  ├── README.md                Documentation
  └── cover/                   image folder 
```

## List

| Index | Title | Year | Rating | Votes | 
| --- | --- | --- | --- | --- | 
| 1 | [Planet Earth II](https://www.imdb.com/title/tt5491994/?ref_=adv_li_i) | 2016 | 9.5 | 62,347 | 
| 2 | [Planet Earth](https://www.imdb.com/title/tt0795176/?ref_=adv_li_i) | 2006 | 9.4 | 140,810 | 
| 3 | [Blue Planet II](https://www.imdb.com/title/tt6769208/?ref_=adv_li_i) | 2017 | 9.3 | 14,814 | 
| 4 | [Cosmos](https://www.imdb.com/title/tt2395695/?ref_=adv_li_i) | 2014 | 9.3 | 91,398 | 
| 5 | [Dynasties](https://www.imdb.com/title/tt9130692/?ref_=adv_li_i) | 2018 | 9.3 | 1,457 | 
| 6 | [The Hunt](https://www.imdb.com/title/tt5167198/?ref_=adv_li_i) | 2015 | 9.3 | 2,863 | 
| 7 | [Human Planet](https://www.imdb.com/title/tt1806234/?ref_=adv_li_i) | 2011 | 9.1 | 19,563 | 
| 8 | [Life](https://www.imdb.com/title/tt1533395/?ref_=adv_li_i) | 2009 | 9.1 | 32,596 | 
| 9 | [Life in the Undergrowth](https://www.imdb.com/title/tt0760222/?ref_=adv_li_i) | 2005 | 9.1 | 3,214 | 
| 10 | [Life on Earth](https://www.imdb.com/title/tt0135095/?ref_=adv_li_i) | 1979 | 9.1 | 2,347 | 
| 11 | [Life Story](https://www.imdb.com/title/tt4150884/?ref_=adv_li_i) | 2014 | 9.1 | 1,569 | 
| 12 | [The Life of Mammals](https://www.imdb.com/title/tt0364174/?ref_=adv_li_i) | 2002 | 9.1 | 3,540 | 
| 13 | [The Vietnam War](https://www.imdb.com/title/tt1877514/?ref_=adv_li_i) | 2017 | 9.1 | 8,836 | 
| 14 | [How the Universe Works](https://www.imdb.com/title/tt1832668/?ref_=adv_li_i) | 2010 | 9.0 | 4,444 | 
| 15 | [Life in Cold Blood](https://www.imdb.com/title/tt1181716/?ref_=adv_li_i) | 2008 | 9.0 | 2,427 | 
| 16 | [Nature's Great Events](https://www.imdb.com/title/tt1380596/?ref_=adv_li_i) | 2009 | 9.0 | 2,749 | 
| 17 | [The High Sierra Trail](https://www.imdb.com/title/tt8363758/?ref_=adv_li_i) | 2018 | 9.0 | 10 | 
| 18 | [The Life of Birds](https://www.imdb.com/title/tt0175394/?ref_=adv_li_i) | 1998 | 9.0 | 2,459 | 
| 19 | [The Private Life of Plants](https://www.imdb.com/title/tt0123360/?ref_=adv_li_i) | 1995 | 9.0 | 2,268 | 
| 20 | [The Trials of Life](https://www.imdb.com/title/tt0133318/?ref_=adv_li_i) | 1990 | 9.0 | 1,421 | 
| 21 | [Africa](https://www.imdb.com/title/tt2571774/?ref_=adv_li_i) | 2013 | 8.9 | 10,185 | 
| 22 | [Frozen Planet](https://www.imdb.com/title/tt2092588/?ref_=adv_li_i) | 2011 | 8.9 | 20,378 | 
| 23 | [The Blue Planet](https://www.imdb.com/title/tt0296310/?ref_=adv_li_i) | 2001 | 8.9 | 24,942 | 
| 24 | [The Universe](https://www.imdb.com/title/tt1051155/?ref_=adv_li_i) | 2007 | 8.9 | 4,550 | 
| 25 | [Wonders of the Universe](https://www.imdb.com/title/tt1854226/?ref_=adv_li_i) | 2011 | 8.9 | 3,426 | 
| 26 | [Nova](https://www.imdb.com/title/tt0206501/?ref_=adv_li_i) | 1974 | 8.8 | 1,859 | 
| 27 | [South Pacific](https://www.imdb.com/title/tt1458521/?ref_=adv_li_i) | 2009 | 8.8 | 2,027 | 
| 28 | [Wonders of the Solar System](https://www.imdb.com/title/tt1611787/?ref_=adv_li_i) | 2010 | 8.8 | 3,875 | 
| 29 | [Earth Story](https://www.imdb.com/title/tt0423645/?ref_=adv_li_i) | 1998 | 8.7 | 196 | 
| 30 | [Earth: The Power of the Planet](https://www.imdb.com/title/tt1145500/?ref_=adv_li_i) | 2007 | 8.7 | 1,831 | 
| 31 | [Sunrise Earth](https://www.imdb.com/title/tt0784945/?ref_=adv_li_i) | 2004 | 8.7 | 135 | 
| 32 | [Baraka](https://www.imdb.com/title/tt0103767/?ref_=adv_li_i) | 1992 | 8.6 | 32,333 | 
| 33 | [Galapagos 3D](https://www.imdb.com/title/tt2242910/?ref_=adv_li_i) | 2013 | 8.6 | 804 | 
| 34 | [Home](https://www.imdb.com/title/tt1014762/?ref_=adv_li_i) | 2009 | 8.6 | 20,231 | 
| 35 | [Into the Universe with Stephen Hawking](https://www.imdb.com/title/tt1655078/?ref_=adv_li_i) | 2010 | 8.6 | 4,601 | 
| 36 | [Journey to the Edge of the Universe](https://www.imdb.com/title/tt1363109/?ref_=adv_li_i) | 2008 | 8.6 | 3,343 | 
| 37 | [Kingdom of Plants 3D](https://www.imdb.com/title/tt2117380/?ref_=adv_li_i) | 2012 | 8.6 | 696 | 
| 38 | [Learning to See: The World of Insects](https://www.imdb.com/title/tt3441840/?ref_=adv_li_i) | 2016 | 8.6 | 28 | 
| 39 | [Natural World](https://www.imdb.com/title/tt0318912/?ref_=adv_li_i) | 1983 | 8.6 | 483 | 
| 40 | [Our Secret Universe: The Hidden Life of the Cell](https://www.imdb.com/title/tt2525604/?ref_=adv_li_i) | 2012 | 8.6 | 245 | 
| 41 | [The National Parks: America's Best Idea](https://www.imdb.com/title/tt1464482/?ref_=adv_li_i) | 2009 | 8.6 | 1,250 | 
| 42 | [Through the Wormhole](https://www.imdb.com/title/tt1513168/?ref_=adv_li_i) | 2010 | 8.6 | 15,383 | 
| 43 | [Tigers About the House](https://www.imdb.com/title/tt3784028/?ref_=adv_li_i) | 2014 | 8.6 | 60 | 
| 44 | [Wonders of Life](https://www.imdb.com/title/tt2699374/?ref_=adv_li_i) | 2013 | 8.6 | 1,290 | 
| 45 | [Big Pacific](https://www.imdb.com/title/tt7274440/?ref_=adv_li_i) | 2017 | 8.5 | 46 | 
| 46 | [Charles Darwin and the Tree of Life](https://www.imdb.com/title/tt1371711/?ref_=adv_li_i) | 2009 | 8.5 | 1,786 | 
| 47 | [Earthflight](https://www.imdb.com/title/tt2346091/?ref_=adv_li_i) | 2011 | 8.5 | 491 | 
| 48 | [First Life](https://www.imdb.com/title/tt1766363/?ref_=adv_li_i) | 2010 | 8.5 | 1,275 | 
| 49 | [Madagascar](https://www.imdb.com/title/tt1842793/?ref_=adv_li_i) | 2011 | 8.5 | 1,758 | 
| 50 | [Samsara](https://www.imdb.com/title/tt0770802/?ref_=adv_li_i) | 2011 | 8.5 | 28,776 | 
| 51 | [State of the Planet](https://www.imdb.com/title/tt0303078/?ref_=adv_li_i) | 2000 | 8.5 | 645 | 
| 52 | [Wild America](https://www.imdb.com/title/tt0321020/?ref_=adv_li_i) | 1982 | 8.5 | 133 | 
| 53 | [Wild China](https://www.imdb.com/title/tt0884762/?ref_=adv_li_i) | 2008 | 8.5 | 2,374 | 
| 54 | [Wildes Russland](https://www.imdb.com/title/tt1442188/?ref_=adv_li_i) | 2008 | 8.5 | 471 | 
| 55 | [Yellowstone](https://www.imdb.com/title/tt1415175/?ref_=adv_li_i) | 2009 | 8.5 | 1,541 | 
| 56 | [How Earth Made Us](https://www.imdb.com/title/tt1588224/?ref_=adv_li_i) | 2010 | 8.4 | 717 | 
| 57 | [Life Cycles](https://www.imdb.com/title/tt1828232/?ref_=adv_li_i) | 2010 | 8.4 | 1,131 | 
| 58 | [The Cove](https://www.imdb.com/title/tt1313104/?ref_=adv_li_i) | 2009 | 8.4 | 44,611 | 
| 59 | [The Salt of the Earth](https://www.imdb.com/title/tt3674140/?ref_=adv_li_i) | 2014 | 8.4 | 16,697 | 
| 60 | [The Secret Life of Chaos](https://www.imdb.com/title/tt1674741/?ref_=adv_li_i) | 2010 | 8.4 | 527 | 
| 61 | [Ashes and Snow](https://www.imdb.com/title/tt0493393/?ref_=adv_li_i) | 2005 | 8.3 | 3,565 | 
| 62 | [Great Barrier Reef](https://www.imdb.com/title/tt2185885/?ref_=adv_li_i) | 2012 | 8.3 | 593 | 
| 63 | [Kingdom of the Oceans](https://www.imdb.com/title/tt1920024/?ref_=adv_li_i) | 2011 | 8.3 | 87 | 
| 64 | [Koyaanisqatsi](https://www.imdb.com/title/tt0085809/?ref_=adv_li_i) | 1982 | 8.3 | 31,145 | 
| 65 | [Virunga](https://www.imdb.com/title/tt3455224/?ref_=adv_li_i) | 2014 | 8.3 | 8,670 | 
| 66 | [For All Mankind](https://www.imdb.com/title/tt0097372/?ref_=adv_li_i) | 1989 | 8.2 | 4,095 | 
| 67 | [Galápagos](https://www.imdb.com/title/tt0996614/?ref_=adv_li_i) | 2006 | 8.2 | 1,161 | 
| 68 | [Hidden Kingdoms](https://www.imdb.com/title/tt3737220/?ref_=adv_li_i) | 2014 | 8.2 | 666 | 
| 69 | [Japan: Earth's Enchanted Islands](https://www.imdb.com/title/tt4791174/?ref_=adv_li_i) | 2015 | 8.2 | 317 | 
| 70 | [Racing Extinction](https://www.imdb.com/title/tt1618448/?ref_=adv_li_i) | 2015 | 8.2 | 6,708 | 
| 71 | [The Act of Killing](https://www.imdb.com/title/tt2375605/?ref_=adv_li_i) | 2012 | 8.2 | 30,220 | 
| 72 | [Atlantic: The Wildest Ocean on Earth](https://www.imdb.com/title/tt4903642/?ref_=adv_li_i) | 2015 | 8.1 | 207 | 
| 73 | [Blackfish](https://www.imdb.com/title/tt2545118/?ref_=adv_li_i) | 2013 | 8.1 | 55,263 | 
| 74 | [Citizenfour](https://www.imdb.com/title/tt4044364/?ref_=adv_li_i) | 2014 | 8.1 | 46,967 | 
| 75 | [Great Migrations](https://www.imdb.com/title/tt1769803/?ref_=adv_li_i) | 2010 | 8.1 | 643 | 
| 76 | [The Internet's Own Boy: The Story of Aaron Swartz](https://www.imdb.com/title/tt3268458/?ref_=adv_li_i) | 2014 | 8.1 | 14,124 | 
| 77 | [Wild Arabia](https://www.imdb.com/title/tt2777876/?ref_=adv_li_i) | 2013 | 8.1 | 392 | 
| 78 | [Earth](https://www.imdb.com/title/tt0393597/?ref_=adv_li_i) | 2007 | 8.0 | 13,691 | 
| 79 | [Known Universe](https://www.imdb.com/title/tt1375408/?ref_=adv_li_i) | 2009 | 8.0 | 287 | 
| 80 | [Le peuple migrateur](https://www.imdb.com/title/tt0301727/?ref_=adv_li_i) | 2001 | 8.0 | 11,021 | 
| 81 | [Touching the Void](https://www.imdb.com/title/tt0379557/?ref_=adv_li_i) | 2003 | 8.0 | 30,755 | 
| 82 | [Jiro Dreams of Sushi](https://www.imdb.com/title/tt1772925/?ref_=adv_li_i) | 2011 | 7.9 | 30,154 | 
| 83 | [Planet Ocean](https://www.imdb.com/title/tt2240784/?ref_=adv_li_i) | 2012 | 7.9 | 1,248 | 
| 84 | [Chasing Ice](https://www.imdb.com/title/tt1579361/?ref_=adv_li_i) | 2012 | 7.8 | 7,588 | 
| 85 | [Encounters at the End of the World](https://www.imdb.com/title/tt1093824/?ref_=adv_li_i) | 2007 | 7.8 | 15,823 | 
| 86 | [Grizzly Man](https://www.imdb.com/title/tt0427312/?ref_=adv_li_i) | 2005 | 7.8 | 47,403 | 
| 87 | [Happy People: A Year in the Taiga](https://www.imdb.com/title/tt1683876/?ref_=adv_li_i) | 2010 | 7.8 | 7,022 | 
| 88 | [Hubble 3D](https://www.imdb.com/title/tt1433813/?ref_=adv_li_i) | 2010 | 7.8 | 3,886 | 
| 89 | [Océans](https://www.imdb.com/title/tt0765128/?ref_=adv_li_i) | 2009 | 7.8 | 8,461 | 
| 90 | [TimeScapes](https://www.imdb.com/title/tt2297031/?ref_=adv_li_i) | 2012 | 7.8 | 986 | 
| 91 | [Life in a Day](https://www.imdb.com/title/tt1687247/?ref_=adv_li_i) | 2011 | 7.7 | 14,260 | 
| 92 | [Meru](https://www.imdb.com/title/tt2545428/?ref_=adv_li_i) | 2015 | 7.7 | 10,816 | 
| 93 | [180° South](https://www.imdb.com/title/tt1407927/?ref_=adv_li_i) | 2010 | 7.6 | 2,705 | 
| 94 | [La marche de l'empereur](https://www.imdb.com/title/tt0428803/?ref_=adv_li_i) | 2005 | 7.6 | 52,637 | 
| 95 | [Side by Side](https://www.imdb.com/title/tt2014338/?ref_=adv_li_i) | 2012 | 7.6 | 12,331 | 
| 96 | [Civilisations](https://www.imdb.com/title/tt7104930/?ref_=adv_li_i) | 2018 | 7.5 | 275 | 
| 97 | [Deep Blue](https://www.imdb.com/title/tt0365109/?ref_=adv_li_i) | 2003 | 7.5 | 2,701 | 
| 98 | [The White Diamond](https://www.imdb.com/title/tt0435776/?ref_=adv_li_i) | 2004 | 7.5 | 3,973 | 
| 99 | [An Inconvenient Truth](https://www.imdb.com/title/tt0497116/?ref_=adv_li_i) | 2006 | 7.4 | 76,393 | 
| 100 | [Cave of Forgotten Dreams](https://www.imdb.com/title/tt1664894/?ref_=adv_li_i) | 2010 | 7.4 | 13,664 | 

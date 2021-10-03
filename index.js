const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const url = 'https://www.theguardian.com/uk'

axios(url).then((res) => {
    const html = res.data
    const $ = cheerio.load(html)
    const articles = []

    $('.fc-item__title', html).each( function() {
        const title =  $(this).text()
        const url = $(this).find('a').attr('href')

        articles.push({
            title,
            url
        })
    })

    console.log(`articles `, articles )

}).catch((err) => {
    console.log(err);
});


const app = express()

app.listen(PORT, () => console.log('server running on port '+ PORT) )

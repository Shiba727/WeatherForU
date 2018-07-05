const request = require('request');
const cheerio = require('cheerio');

const url = 'https://www.cwb.gov.tw/V7/forecast/';

request(url, (err, res, body) => {
  console.log(body)
})
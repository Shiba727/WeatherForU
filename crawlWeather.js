const request = require('request');
const cheerio = require('cheerio');

request({
    url: "https://www.cwb.gov.tw/V7/forecast/",
    method: "GET"
}, function(err, response, body) { /* Callback function */
    if (err || !body) {
        return;
    }
    //  to load the HTML. 
    $ = cheerio.load(body);
    var citiesWeather = [];
    var cities = $('div.NorthArea table.N_AreaList tbody tr#KeelungList td a');

    console.log($(cities).text());
    // console.log(citiesWeather);
});










// const request = require('request');
// const url = 'http://opendata.cwb.gov.tw/opendataapi?dataid=F-C0032-001&authorizationkey=CWB-C7CCB1D0-AD5B-4DFD-A02D-7E7CBEC72DB7';

// var xml2js = require('xml2js');
// var parseString = xml2js.parseString;
// var xml;

// request(url,function(err,res,body){
// 	// console.log(body);
// 	xml = body;
// })

// parseString(xml, function (err, result) {
//     console.log(result);
// });


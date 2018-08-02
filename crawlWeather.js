const request = require('request');
const cheerio = require('cheerio');
var db = require('./models');
var Weathers = db.Weathers;

function weathers() {
	request({
		url: "https://www.cwb.gov.tw/V7/forecast/f_index.htm?_=1532267923074",
		method: "GET",
		timeout: 86400
	}, function (err, response, body) { /* Callback function */
		if (err || !body) {
			return;
		}
		//  to load the HTML. 
		$ = cheerio.load(body);
		var weathers = [];
		var cities = [];
		var city = {};
		var statusArr = [];
		var Ncities = $('div.big01 tbody tr td a');
		var Scities = $('div.big03 tbody tr td a');

		var NcitiesImg = $('div.big01 tbody tr td a div.spic img');
		var ScitiesImg = $('div.big03 tbody tr td a div.spic img');

		$(Ncities).each(function (i, elem) {
			weathers.push(($(this).text()));
			var status = $(NcitiesImg[i]).attr('title');
			if (status !== undefined) {
				// console.log(status);
				statusArr.push(status);
			}
		})
		$(Scities).each(function (i, elem) {
			weathers.push(($(this).text()));
			var status = $(ScitiesImg[i]).attr('title');
			if (status !== undefined) {
				// console.log(status);
				statusArr.push(status);
			}
		})
		
		var item = 0;
		function getStatus(item){
			return statusArr[item];
		}

		for (var i = 0; i < weathers.length; i += 4) {
			
			weathers.splice(i+3,1,getStatus(item));
			item++;
			Weathers.create({
				'cityname': weathers[i],
				'temp': weathers[i + 1],
				'rain': weathers[i + 2],
				'status': weathers[i + 3]
			});
		}
	});
}

exports.weathers = weathers;

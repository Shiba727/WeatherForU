const weather = require('../crawlWeather');
var db = require('../models');

var Weathers = db.Weathers;

// bcrypt.encode is for encrpt the password
let pageController = {
	indexPage: function(req,res){
    	res.render('index',{title:'WeatherForU'});
    	weather.weathers();

    	Weathers.find({
			where:{
				cityname:'臺北市',
			}
		})
		.then(function (city){
			//就可以在cmd看到找到的台北市分別的氣溫跟降雨機率
			console.log(city.cityname);
			console.log(city.temp);
			console.log(city.rain);
		})
	}
};
module.exports = pageController;

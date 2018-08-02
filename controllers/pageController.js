const weather = require('../crawlWeather');
var db = require('../models');

var Weathers = db.Weathers;

// bcrypt.encode is for encrpt the password
let pageController = {
	indexPage: function(req,res){
		weather.weathers();
    	res.render('index',{title:'WeatherForU'});
    	
		
    	// Weathers.findAll({
		// 	where: {
		// 		cityname: '新竹縣'
		// 	}})
		// .then(function (city){
		// 	//就可以在cmd看到找到的台北市分別的氣溫跟降雨機率
		// 	console.log(city.cityname);
		// 	console.log(city.temp);
		// 	console.log(city.rain);
			
		// })
	}, //weather get count then each id have own data|| then ajax get each id 
	weatherId: function(req,res){
		var id = req.query.id; 
		
		Weathers.findAll({
			where:{
				id: id
			}})
			.then(function(result){
				res.json(result);
			})
	},
	weatherApi: function(req,res){
		Weathers.findAll()
			.then(function(result){
				res.json(result);
				
			});
	}
};
module.exports = pageController;

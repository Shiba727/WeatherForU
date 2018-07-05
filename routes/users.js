// var express = require('express');
// var router = express.Router();
// var User = require('../models/users');

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// router.get('/login', function(req, res, next) {
//   res.render('login', { title: 'Login' });
// });
// router.get('/signup', function(req, res, next) {
//   res.render('signup', { title: 'Sign Up' });
// });

// router.post('/login', function(req, res, next) {
// 	let username = req.body.username;
// 	let password = req.body.password;
//   	res.render('index', { title: 'WeatherForU' });
// });
// router.post('/signup', function(req, res, next) {
// 	let username = req.body.username;
// 	let password = req.body.password;
// 	if(username && password){
// 		var newUser = new User({
// 			username:username,
// 			password:password
// 		});
// 		User.createUser(newUser,function(err,user){
// 			if(err) throw err;
// 			console.log(user);
// 		});
// 	}
// 	res.render('index', { title: 'WeatherForU' });
// });


// module.exports = router;

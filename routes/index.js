var express = require('express');
var router = express.Router();

var User = require('../models/users');


// function checkAuth(req, res, next) {
// 	if(!req.session.user_id) {
//   		res.redirect(303,'/login');
//     }else {
//       	next();
//     }
// }

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/index',  function(req, res, next) {
	console.log(req.session.id);
	console.log(req.session.user_id);
	if(!req.session.user_id) {
  		res.redirect(303,'/login');
    }else {
 	 	res.render('index', { title: 'WeatherForU' });
    }
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Sign Up' });
});

router.post('/signup', function(req, res, next) {
	var username = req.body.username;
	var password = req.body.password;
	console.log(User);
	var newUser = new User({
		username:username,
		password:password
	});
	console.log(newUser);
	User.createUser(newUser,function(err,user){
		if(err) throw err;
		req.session.user_id = user._id;	
		console.log(req.session.id);
	});
	req.session.save(function(err) {
	  // session saved
	})

	res.redirect(303,'/index');
});

router.post('/login', function(req, res, next) {
	let username = req.body.username;
	let password = req.body.password;
	User.findUser(username,function(err,user){
		if(err) throw err;
		console.log(user);
		if(!user){
			res.redirect(303,'/signup');
		}else{
			User.comparePassword(password, user.password, function(err, isMatch){
	            if(err) throw err;
	            if(isMatch){
	            	req.session.user_id = user._id;	
	               	res.redirect(303,'/index');
	            } else {
	                res.redirect(303,'/login');
	            }				
			})
		}
	})
});


module.exports = router;

//q1 new user 不是schema
//q2 session.user_id not global
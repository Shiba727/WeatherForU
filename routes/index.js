const userController = require('../controllers/userController.js');
const pageController = require('../controllers/pageController.js');
<<<<<<< HEAD
const latlng = require('../public/javascripts/latlng.js');
const mapIcon = require('../public/javascripts/mapIcon.js');
const cardIcon = require('../public/javascripts/cardIcon.js');
=======
>>>>>>> origin/revised_sql

function checkAuth(req, res, next) {
	if(!req.session.user_id) {
  		res.redirect(303,'/');
    }else {
      	next();
    }
}

module.exports = function (app) {

  app.get('/',userController.loginPage);
  app.get('/login',userController.loginPage);
  app.get('/logout',userController.logout);
  app.get('/signup',userController.registerPage);
<<<<<<< HEAD
  app.get('/user',userController.user);
  app.get('/index',checkAuth,pageController.indexPage);
  app.get('/api/index',pageController.weatherApi);
  app.get('/index/area',pageController.weatherId);
  app.get('/api/latlng',function(req,res){res.json(latlng)});
  app.get('/api/mapIcon',function(req,res){res.json(mapIcon)});
  app.get('/api/cardIcon',function(req,res){res.json(cardIcon)});

  app.post('/signup',userController.register);
  app.post('/login',userController.login);
  app.post('/api/index',pageController.weatherApi);
  app.post('/index/area',pageController.weatherId);
  app.post('/api/latlng',function(req,res){res.json(latlng)});
  app.post('/api/mapIcon',function(req,res){res.json(mapIcon)});
  app.post('/api/cardIcon',function(req,res){res.json(cardIcon)});
=======

  app.get('/index',checkAuth,pageController.indexPage);

  app.post('/signup',userController.register);
  app.post('/login',userController.login);

>>>>>>> origin/revised_sql
};
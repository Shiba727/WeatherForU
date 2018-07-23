const userController = require('../controllers/userController.js');
const pageController = require('../controllers/pageController.js');

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

  app.get('/index',checkAuth,pageController.indexPage);

  app.post('/signup',userController.register);
  app.post('/login',userController.login);

};
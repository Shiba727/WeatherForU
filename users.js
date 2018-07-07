//using mongoose to connect mongodb
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/users');
var db = mongoose.connection;
var bcrypt = require('bcryptjs');

//User Schema
var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        index: true
    },
    password: {
        type: String
    }
});

//export User schema
var User = module.exports = db.model('User', UserSchema);

//export createUser function
module.exports.createUser = function(newUser, callback){
    bcrypt.genSalt(10,function(err,salt){
    	bcrypt.hash(newUser.password,salt,function(err,hash){
    		// store bcrypted password to DB
    		newUser.password = hash;
    		newUser.save(callback);
    	})
    })
};

// export findUser function
module.exports.findUser = function(username, callback){
	let query = {
		username: username
	};
	User.findOne(query,callback);
};

// export comparePassword function
module.exports.comparePassword = function(password,hash,callback){
	bcrypt.compare(password,hash,function(err,isMatch){
		callback(null,isMatch)
	})
};


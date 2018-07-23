var express = require('express');
var app = express();

var db = require('./models');

var session = require('express-session');
app.use(session({secret: 'JaniceCertified', saveUninitialized: true, resave: false}));

app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));


app.set('view engine','ejs');
app.listen(3000, function() {
  db.sequelize.sync();
});


var routes = require('./routes')(app);


// 在JS透過eventloop有asynchronous
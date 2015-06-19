var  config = require('./config.js');
var express = require('express');
var session = require('express-session');
var router = require('./router.js')
var MongoStore = require('connect-mongo')(session);
var bodyParser          = require('body-parser');
var cookieParser = require('cookie-parser')(config.session_secret);
var app = express();
// var models = require('./models');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser);

var connection_string = config.dbprefix + config.dbhost + '/' + config.dbname;
console.log(connection_string);
var session = session({
  secret: config.session_secret,
  store: new MongoStore({
    url: connection_string
  }),
  resave: true,
  saveUninitialized: true,
})
app.use(session);

app.use('/', router);

app.listen(config.port, function () {
    console.log("listening on port ", config.port);
});

module.exports = app;

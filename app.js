var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressHbs = require('express-handlebars');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');
var validator = require('express-validator');
var MongoStore = require('connect-mongo')(session);

var index = require('./routes/index');
var userRoutes = require('./routes/user');
var USERSRoutes = require('./routes/USERS');

var app = express();
//
mongoose.connect('mongodb+srv://dinhvan:kQOxD6rPs6Tqinv3a@cluster0.rd0ho.mongodb.net/Eatcake?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true });
require('./config/passport');

// view engine setup
app.engine('.hbs',expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

//app.engine('.hbs',expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
//app.set('view engine', '.hbs');
//app.set('view engine', 'ejs');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());
app.use(cookieParser());
app.use(session({
	secret: 'mysupersecret',
	resave:false, 
	saveUninitialized: false,
	store: new MongoStore({ mongooseConnection: mongoose.connection }),
	cookie: { maxAge: 180 * 60 * 1000 }
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req,res,next){
	res.locals.login = req.isAuthenticated();
	res.locals.session = req.session;
	next();
});

app.use('/user', userRoutes);//ordering is important
app.use('/', index);
app.use('/USERS', USERSRoutes);//ordering is important
app.use('/', index);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

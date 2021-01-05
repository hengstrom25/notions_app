var express = require('express');
var session = require('express-session');
// var grant = require('grant').express();
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
const {pool} = require('./config')

var indexRouter = require('./routes/index');
var sessionRouter = require('./routes/session');
var usersRouter = require('./routes/users');
var testAPIRouter = require('./routes/api');
var dashboardRouter = require('./routes/dashboard');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/build')));

// Use Grant for OAuth 2.0 w/ Ravelry
app.use(session({
  secret: 'grant',
  resave: false,
  saveUninitialized: true
}));
// app.use(grant({
//   "defaults": {
//     "origin": process.env.ROOT_URL,
//     "transport": "session",
//     "prefix": "/session",
//   },
//   "ravelry": {
//     "authorize_url": "https://www.ravelry.com/oauth2/auth",
//     "access_url": "https://www.ravelry.com/oauth2/token",
//     "oauth": 2,
//     "key": process.env.RAVELRY_CLIENT_ID,
//     "secret": process.env.RAVELRY_SECRET,
//     "state": "123456ABCD"
//   }
// }));

// Use routers
app.use('/', indexRouter);
app.use('/session', sessionRouter);
app.use('/users', usersRouter);
app.use('/api', testAPIRouter);
app.use('/dashboard', dashboardRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

// let port = process.env.PORT;
// if (port == null || port == "") {
//   port = 8000;
// }
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, () => {
  console.log('Hi Heroku')
  console.log(`App is running on port ${process.env.PORT || 8080}.`)
});

module.exports = app;

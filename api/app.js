var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');
var session = require('express-session');
// var grant = require('grant').express();
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
const { pool } = require('./config')

var indexRouter = require('./routes/index');
var sessionRouter = require('./routes/session');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');
var dashboardRouter = require('./routes/dashboard');

var sequelize = require('./db/sequelize');

try {
    sequelize.db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

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

app.use(session({ secret: process.env.SESSION_SECRET, cookie: { maxAge: 60000 } }))

// Use routers
app.use('/', indexRouter);
app.use('/session', sessionRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);
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

if (process.env.NODE_ENV !== 'production') {
  https.createServer({
    key: fs.readFileSync('key.pem', 'utf8'),
    cert: fs.readFileSync('cert.pem', 'utf8'),
  }, app).listen(8080)
} else {
  http.createServer({},app).listen(8080)
}

// let port = process.env.PORT;
// if (port == null || port == "") {
//   port = 8000;
// }
// Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080, () => {
//   console.log('Hi Heroku')
//   console.log(`App is running on port ${process.env.PORT || 8080}.`)
// });

module.exports = app;

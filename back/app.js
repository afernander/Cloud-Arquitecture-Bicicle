var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var bicicletasRouter = require('./routes/bicicleta.js')

const table = require('./database/db.js');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('', bicicletasRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


table.createTable();

module.exports = app;

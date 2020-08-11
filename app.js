var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const heroesRouter = require('./routes/heroes');
var providerStateRouter = require('./routes/provider_state');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/heroes', heroesRouter);

// setting up here for testing purpose
process.env.PACT_MODE = 'true';

if (process.env.PACT_MODE === 'true') {
  app.use('/provider-state', providerStateRouter);
}

module.exports = app;

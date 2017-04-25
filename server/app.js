const express = require('express');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//  Getting API routes
const api = require('./routes/api');

//	Create Express app
const app = express();


function initializeExpressApp() {

  // Setting the morgan logger to log all requests
  app.use(logger('dev'));

  // Parsers for POST data
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));

  app.use(express.static(path.join(process.env.DIR, 'dist')));

}

function initializeRoutes() {

  // Set our api routes
  app.use('/api', api);

  // Catch all other routes and return the index file
  app.get('/*', function (req, res) {
    res.sendFile(path.join(process.env.DIR, 'dist/index.html'));
  });

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
};

function initializeDB() {
  mongoose.connect(process.env.MONGODB_URI);
}

app.init = function () {
  initializeDB();
  initializeExpressApp();
  initializeRoutes();

  return app;
}

app.serve = function () {
  app.listen(process.env.PORT, function () {
    console.log(process.env.APP_NAME, 'listening on port', process.env.PORT);
  });
}

module.exports = app;

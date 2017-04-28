const app = require('./server/app');

// loading the necessary environment variables
if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({
    path: './.env'
  });
}

process.env.DIR = __dirname;

app
  .init()
  .serve();

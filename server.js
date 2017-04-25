const app = require('./server/app');

// loading the necessary environment variables
require('dotenv').config();

process.env.DIR = __dirname;

app
  .init()
  .serve();

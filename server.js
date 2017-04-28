const app = require('./server/app');

// loading the necessary environment variables
if (!process.env.NODE_ENV){
  console.log('NODE_ENV not defined!!!');
  console.log('\tLoading local env variables.');
  require('dotenv').config({
    path: './.env'
  });
}

process.env.DIR = __dirname;

app
  .init()
  .serve();

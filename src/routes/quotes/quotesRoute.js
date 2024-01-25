const express = require('express');
const { 
  getQuote
 } = require('../../controllers/quotes/quotesController');

const quotesRoute = express.Router();

quotesRoute.get('/:date', getQuote);


module.exports = quotesRoute;
const express = require('express');
const { 
  createIncome,
  fetchallIncome,
  fetchsingleIncome,
  updateIncome,
  deleteIncomeDetails,
  fetchTotalIncome
 } = require('../../controllers/income/incomeController');
const incomeRoute = express.Router();

incomeRoute.post('/create', createIncome);
incomeRoute.get('/all', fetchallIncome);
incomeRoute.post('/single', fetchsingleIncome);
incomeRoute.put('/:id', updateIncome);
incomeRoute.delete('/:id', deleteIncomeDetails);
incomeRoute.post('/totalIncome', fetchTotalIncome);

module.exports = incomeRoute;
const express = require('express');
const { 
  createExpense,
  fetchallExpenses,
  fetchsingleExpense,
  updateExpense,
  deleteExpenseDetails,
  fetchTotalExpense
 } = require('../../controllers/expenses/expenseController');
const expenseRoute = express.Router();

expenseRoute.post('/create', createExpense);
expenseRoute.get('/all',fetchallExpenses);
expenseRoute.post('/single', fetchsingleExpense);
expenseRoute.put('/:id', updateExpense);
expenseRoute.delete('/:id', deleteExpenseDetails);
expenseRoute.post('/totalExpense', fetchTotalExpense);
module.exports = expenseRoute;
const express = require('express');
const { 
  createExpense,
  fetchallExpenses,
  fetchsingleExpense,
  updateExpense,
  deleteExpenseDetails
 } = require('../../controllers/expenses/expenseController');
 const authMiddleware = require('../../middlewares/authMiddleware');
const expenseRoute = express.Router();

expenseRoute.post('/',authMiddleware, createExpense);
expenseRoute.get('/',authMiddleware, fetchallExpenses);
expenseRoute.get('/:id',authMiddleware, fetchsingleExpense);
expenseRoute.put('/:id',authMiddleware, updateExpense);
expenseRoute.delete('/:id',authMiddleware, deleteExpenseDetails);

module.exports = expenseRoute;
const expressAsyncHandler = require('express-async-handler');
const Expense = require('../../models/Expense');

//create

const createExpense = expressAsyncHandler(async (req, res) => {
  const {title, amount, description, user_id} = req.body;
  try {
    const expense = await Expense.create({
      title,
      amount,
      description,
      user_id
    });
    res.json(expense);
  }
  catch (err) {
    res.json(err);
}
})

// fetch all the income information

const fetchallExpenses = expressAsyncHandler(async (req, res) => {
  try {
    const expense = await Expense.find({});
    res.json(expense);
  }
  catch (err) {
    res.json(err);
}
})

//fetch single income

const fetchsingleExpense = expressAsyncHandler(async (req, res) => {
  const {id} = req.body
  console.log(id)
  
  try {
    const expense = await Expense.find({user_id: id});
    res.json(expense);
  }
  catch (err) {
    res.json(err);
}
})

//fetch all totalExpense

const fetchTotalExpense = expressAsyncHandler(async (req, res) => {
  const {id} = req.body
  console.log(id)
  
  try {
    const expense = await Expense.find({user_id: id});
    const totalAmount = expense.reduce((accumulator, currentIncome) => {
      return accumulator + currentIncome.amount;
    }, 0);
    res.json(totalAmount);
  }
  catch (err) {
    res.json(err);
}
})

//update
const updateExpense = expressAsyncHandler(async(req, res) => {
  const {id} = req?.params;
  const {title, amount, description} = req.body;
  try {
    const expense = await Expense.findByIdAndUpdate(id,{
      title, amount, description
    },{new: true});
    res.json(expense)
  } catch (err) {
    res.json(err);
  }
})

//delete

const deleteExpenseDetails = expressAsyncHandler(async (req, res) => {
  const {id} = req?.params;
  
  try {
    const expense = await Expense.findByIdAndDelete(id);
    res.json(expense);
  }
  catch (err) {
    res.json(err);
}
})

module.exports = {createExpense, fetchallExpenses,fetchsingleExpense, updateExpense, deleteExpenseDetails,fetchTotalExpense};
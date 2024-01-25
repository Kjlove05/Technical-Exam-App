const expressAsyncHandler = require('express-async-handler');
const Expense = require('../../models/Expense');

//create

const createExpense = expressAsyncHandler(async (req, res) => {
  const {title, amount, description, user} = req.body;
  try {
    const expense = await Expense.create({
      title,
      amount,
      description,
      user: req?.user?._id,
    });
    res.json(expense);
  }
  catch (err) {
    res.json(err);
}
})

// fetch all the income information

const fetchallExpenses = expressAsyncHandler(async (req, res) => {
  const {page} = req.query;
  try {
    const expense = await Expense.paginate({}, {limit:10, page: Number(page), populate: "user" });
    res.json(expense);
  }
  catch (err) {
    res.json(err);
}
})

//fetch single income

const fetchsingleExpense = expressAsyncHandler(async (req, res) => {
  const {id} = req?.params;
  
  try {
    const expense = await Expense.findById(id);
    res.json(expense);
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

module.exports = {createExpense, fetchallExpenses,fetchsingleExpense, updateExpense, deleteExpenseDetails};
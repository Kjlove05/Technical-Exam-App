const expressAsyncHandler = require('express-async-handler');
const Income = require('../../models/Income');
const mongoose = require('mongoose');

const createIncome = expressAsyncHandler(async (req, res) => {
  const {title, amount, description, user_id} = req.body;
  try {
    const income = await Income.create({
      title,
      amount,
      description,
      user_id
    });
    res.json(income);
  }
  catch (err) {
    res.json(err);
}
})

// fetch all the income information

const fetchallIncome = expressAsyncHandler(async (req, res) => {
  
  try {
    const income = await Income.find({})
    res.json(income);
  }
  catch (err) {
    res.json(err);
}
})

//fetch single income

const fetchsingleIncome = expressAsyncHandler(async (req, res) => {
  const {id} = req.body;

  try {

    const income = await Income.find({user_id: id});
    res.json(income);
  }
  catch (err) {
    res.json(err);
}
})

// total income
const fetchTotalIncome = expressAsyncHandler(async (req, res) => {
  const {id} = req.body;

  try {

    const income = await Income.find({user_id: id});

    const totalAmount = income.reduce((accumulator, currentIncome) => {
      return accumulator + currentIncome.amount;
    }, 0);
    res.json(totalAmount);
  }
  catch (err) {
    res.json(err);
}
})


//update
const updateIncome = expressAsyncHandler(async(req, res) => {
  const {id} = req?.params;
  const {title, amount, description} = req.body;
  try {
    const income = await Income.findByIdAndUpdate(id,{
      title, amount, description
    },{new: true});
    res.json(income)
  } catch (err) {
    res.json(err);
  }
})

//delete

const deleteIncomeDetails = expressAsyncHandler(async (req, res) => {
  const {id} = req?.params;
  
  try {
    const income = await Income.findByIdAndDelete(id);
    res.json(income);
  }
  catch (err) {
    res.json(err);
}
})

module.exports = {createIncome, fetchallIncome,fetchsingleIncome, updateIncome, deleteIncomeDetails,fetchTotalIncome};
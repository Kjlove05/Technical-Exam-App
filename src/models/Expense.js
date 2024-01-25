const mongoose = require('mongoose');

//schema
const expenseSchema = mongoose.Schema({
  title: {
    required: [true, "Title is required"],
    type: String,
  },
  description: {
    required: [true, "Description is required"],
    type: String,
  },
  type: {
    type: String,
    default: 'Expense',
  },
  amount: {
    required: [true, "Amount is required"],
    type: Number,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, "User ID is required"],
  },
 
},
{
  timestamp: true,
  toJson: {
    virtuals: true, 
  },
  toObject: {
    virtuals: true,
}
}
);
const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;

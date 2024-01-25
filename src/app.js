const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dbConfig = require("./config/dbConfig");
const userRoute = require("./routes/users/usersRoute");
const incomeRoute = require("./routes/income/incomeRoute");
const expenseRoute = require("./routes/expenses/expenseRoute");
const quoteRoute = require("./routes/quotes/quotesRoute");
const { errorHandler, notFound } = require("./middlewares/middleware");
const cron = require('node-cron');
const quotesCron = require('./cron/quotes')

const app = express();

dotenv.config();

dbConfig();
app.use(express.json());
app.use(cors());



// routes

//users route
app.use("/api/users",userRoute);

//income route
app.use("/api/income",incomeRoute);

//expenses route
app.use("/api/expense",expenseRoute);

//expenses route
app.use("/api/quotes",quoteRoute);
// Error handlers
app.use(notFound);
app.use(errorHandler);

// runs every 12:01am everyday - 1 0 * * *
cron.schedule('1 0 * * *', function () {
    console.log('getting quote')
  quotesCron.getQuotes();
})

module.exports = app;
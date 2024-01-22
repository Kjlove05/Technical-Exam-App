const express = require("express");
const dbConnection = require("./config/dbConfig");
const userRoute = require("./routes/users/usersRoute");
const { errorHandler, notFound } = require("./middlewares/middleware");
const dotenv = require("dotenv");


const app = express();
dotenv.config();
app.use(express.json());


// routes
app.use("/api/users",userRoute);

// Error handlers
app.use(notFound);
app.use(errorHandler);

dbConnection();

module.exports = app;
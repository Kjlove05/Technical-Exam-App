const mongoose = require("mongoose");


const dbConnect = async () => {
  try {
       await mongoose.connect(process.env.MONGO_URL,
        {
        useUnifiedTopology: true,
        useNewUrlParser: true,
       })
       console.log("Connected to database Successfully");
  } catch (error) {
    console.log(`Error ${error.message}`);
  }
       
};

module.exports = dbConnect;
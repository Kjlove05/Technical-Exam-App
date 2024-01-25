const expressAsyncHandler = require('express-async-handler');
const QuotesModel = require('../../models/Quotes')

const getQuote = expressAsyncHandler(async (req, res) => {
  const {date} = req.params;
  console.log('data',date)
  try {
    const quotes = await QuotesModel.find({"date":date})
    res.json(quotes)
  }
  catch (err) {
    res.json(err);
}
})

module.exports = {getQuote};

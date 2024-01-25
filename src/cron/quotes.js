const QuotesModel = require('../models/Quotes')
const axios = require("axios");

module.exports = {
    getQuotes : async function(){

        let quote_for_day = {
            quote:'',
            author:'',
            date: new Date().toISOString().substr(0,10),
        }

        try {
            var category = 'money';
        
            axios.get('https://api.api-ninjas.com/v1/quotes', {
            params: { category: category },
            headers: {
                'X-Api-Key': 'pvowP9388vSLx/fDjTLd4Q==oMMui763j2WmoM5X'
            }
            })
            .then(function (response) {
                let res = response.data[0]
                quote_for_day.quote = res.quote
                quote_for_day.author = res.author
                let quote = new  QuotesModel(quote_for_day)
                quote.save()     
            })
            .catch(function (error) {
            console.log('Request failed:', error);
            });
        } catch (error) {
            console.log("#log", error);
            res.status(500).json({ message: error.message })
        }
    }
}
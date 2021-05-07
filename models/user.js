const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  companyname: {
    type: String
  },
  stocksymbol: {
    type: String
  },
  marketcap: {
    type: String
  },
  currentprice: {
    type: String
  }
}, {
    collection: 'users'
  })

module.exports = mongoose.model('User', userSchema)
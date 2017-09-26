const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  category: String,
  stores: [{
    storeId: String,
    price: Number,
    currency: String,
    date: String
  }, ],
  size: {
    value: Number,
    unit: String
  }
});

const Product = mongoose.model('Product', schema);

module.exports = Product;
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  category: String,
  avgPrice: Number,
  stores: [
    {
      storeId: String,
      price: Number,
      date: String
    },
  ],
  size: {
    value: Number,
    unit: String
  }
});

const Product = mongoose.model('Product', schema);

module.exports = Product;

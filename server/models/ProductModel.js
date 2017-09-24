const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: String,
  avgPrice: Number,
  stores: [
    {
      name: String,
      price: Number,
    },
  ],
  category: String,
});

const Product = mongoose.model('Product', schema);

module.exports = Product;

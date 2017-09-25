const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  iconURL: String
});

const Category = mongoose.model('Category', schema);

module.exports = Category;

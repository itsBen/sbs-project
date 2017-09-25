const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  locations: [String]
});

const Store = mongoose.model('Store', schema);

module.exports = Store;

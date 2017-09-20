const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const config = require('../config/config');

mongoose.connect(config.mongoDBUrl)
const db = mongoose.connection;

const schema = new mongoose.Schema({
  title: String,
  avgPrice: Number,
  stores: [{
    name: String,
    price: Number
  }],
  category: String
})

const Product = mongoose.model('Product', schema);

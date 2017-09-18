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

router.get('/:category',(req,res)=>{
  const query = {
    category: req.params.category
  };
  Product.find(query, (err,data)=>{
    if(err)
      throw err;
    else {
      res.json(data);
    }
  });
});

module.exports = router;

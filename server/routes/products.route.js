const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const config = require('../config/config');
const Product = require('../models/ProductModel');

mongoose.connect(config.mongoDBUrl, { useMongoClient: true });
const db = mongoose.connection;

router.get('/:category', (req, res) => {
  const query = {
    category: req.params.category,
  };
  Product.find(query, (err, data) => {
    if (err) throw err;
    else {
      res.json(data);
    }
  });
});

module.exports = router;

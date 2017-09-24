const admin = require('../config/firebaseAdmin');
const passport = require('../config/passport');

const Product = require('../models/ProductModel');
const Store = require('../models/StoreModel');
const Category = require('../models/CategoryModel');

module.exports = (app, passport) => {

  //get all products
  app.get('/products', (req, res)=>{
    Product.find({}, (err,data)=>{
      if(err)
        res.status(500);
      else
        res.json(data);
    })
  })

  //get product by category id
  app.get('/products/:categoryid', (req, res)=>{
    Product.find({
      category: req.params.categoryid
    }, (err,data)=>{
      if(err)
        res.status(500);
      else
        res.json(data);
    })
  })

  //get product by name
  app.get('/products/byname/:name', (req, res)=>{
    Product.find({
      name: req.params.name
    }, (err,data)=>{
      if(err)
        res.status(500);
      else
        res.json(data);
    })
  })

  //get all stores
  app.get('/stores', (req, res)=>{
    Store.find({}, (err,data)=>{
      if(err)
        res.status(500);
      else
        res.json(data);
    })
  })

  //get store by name
  app.get('/stores/:name', (req, res)=>{
    Store.find({
      name: req.params.name
    }, (err,data)=>{
      if(err)
        res.status(500);
      else
        res.json(data);
    })
  })

  //get all categories
  app.get('/categories', (req, res)=>{
    Category.find({}, (err,data)=>{
      if(err)
        res.status(500);
      else
        res.json(data);
    })
  })

  //get category by name
  app.get('/categories/:name', (req, res)=>{
    Category.find({
      name: req.params.name
    }, (err,data)=>{
      if(err)
        res.status(500);
      else
        res.json(data);
    })
  })

}

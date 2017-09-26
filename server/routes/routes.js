const admin = require('../config/firebaseAdmin');
const passport = require('../config/passport');

const Product = require('../models/ProductModel');
const Store = require('../models/StoreModel');
const Category = require('../models/CategoryModel');

module.exports = (app, passport) => {

  //get all products
  app.get('/products', (req, res) => {
    Product.find({}, (err, data) => {
      if (err)
        res.status(500);
      else
        res.json(data);
    })
  })

  //get product by category id
  app.get('/products/category/:categoryid([A-Za-z0-9]+)', (req, res) => {

    //Trim and escape the categoryid field. 
    req.sanitize('categoryid').escape();
    req.sanitize('categoryid').trim();

    //Run the validators
    var errors = req.validationErrors();

    if (errors) {
      res.status(400);
    } else {
      // not an ObjectId type...
      Product.find({
        category: req.params.categoryid
      }, (err, data) => {
        if (err)
          res.status(500);
        else
          res.json(data);
      })
    }

  })

  //get product by name
  app.get('/products/name/:name([A-Za-z0-9 ]+)', (req, res) => {

    //Trim and escape the name field. 
    req.sanitize('name').escape();
    req.sanitize('name').trim();

    //Run the validators
    var errors = req.validationErrors();

    if (errors) {
      res.status(400);
    } else {
      Product.find({
        name: {
          $regex: new RegExp(req.params.name, "i")
        }
      }, (err, data) => {
        if (err)
          res.status(500);
        else
          res.json(data);
      })
    }
  })

  //get product by id
  app.get('/products/id/:productid([A-Za-z0-9]+)', (req, res) => {

    //Trim and escape the productid field. 
    req.sanitize('productid').escape();
    req.sanitize('productid').trim();

    //Run the validators
    var errors = req.validationErrors();

    if (errors) {
      res.status(400);
    } else {
      Product.findById(req.params.productid, (err, data) => {
        if (err)
          res.status(500);
        else
          res.json(data);
      })
    }
  })

  //get all stores
  app.get('/stores', (req, res) => {
    Store.find({}, (err, data) => {
      if (err)
        res.status(500);
      else
        res.json(data);
    })
  })

  //get store by name
  app.get('/stores/name/:name([-A-Za-z0-9 ]+)', (req, res) => {

    //Trim and escape the name field. 
    req.sanitize('name').escape();
    req.sanitize('name').trim();

    //Run the validators
    var errors = req.validationErrors();

    if (errors) {
      res.status(400);
    } else {

      Store.find({
        name: {
          $regex: new RegExp(req.params.name, "i")
        }
      }, (err, data) => {
        if (err)
          res.status(500);
        else
          res.json(data);
      })
    }
  })

  //get store by id
  app.get('/stores/id/:storeid([A-Za-z0-9]+)', (req, res) => {

    //Trim and escape the storeid field. 
    req.sanitize('storeid').escape();
    req.sanitize('storeid').trim();

    //Run the validators
    var errors = req.validationErrors();

    if (errors) {
      res.status(400);
    } else {

      Store.findById(req.params.storeid, (err, data) => {
        if (err)
          res.status(500);
        else
          res.json(data);
      })
    }
  })

  //get all categories
  app.get('/categories', (req, res) => {
    Category.find({}, (err, data) => {
      if (err)
        res.status(500);
      else
        res.json(data);
    })
  })

  //get category by name
  app.get('/categories/name/:name([-A-Za-z0-9]+)', (req, res) => {

    //Trim and escape the name field. 
    req.sanitize('name').escape();
    req.sanitize('name').trim();

    //Run the validators
    var errors = req.validationErrors();

    if (errors) {
      res.status(400);
    } else {
      Category.find({
        name: {
          $regex: new RegExp(req.params.name, "i")
        }
      }, (err, data) => {
        if (err)
          res.status(500);
        else
          res.json(data);
      })
    }
  })

  //get category by id
  app.get('/categories/id/:categoryid([A-Za-z0-9]+)', (req, res) => {

    //Trim and escape the categoryid field. 
    req.sanitize('categoryid').escape();
    req.sanitize('categoryid').trim();

    //Run the validators
    var errors = req.validationErrors();

    if (errors) {
      res.status(400);
    } else {
      Category.findById(req.params.categoryid, (err, data) => {
        if (err)
          res.status(500);
        else
          res.json(data);
      })
    }
  })
}

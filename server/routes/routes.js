const admin = require('../config/firebaseAdmin');
//const auth = require('../config/test');
const passport = require('../config/passport');

module.exports = (app,db,passport) => {

const schema = new db.Schema({
  title: String,
  avgPrice: Number,
  stores: [{
    name: String,
    price: Number
  }],
  category: String
})

const Product = db.model('Product', schema);

app.get('/products/:category',(req,res)=>{
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

app.get('/', (req,res)=>{
  res.send('welcome page');
});

app.get('/users/:id', passport.authenticate('firebase'));

app.get('/error', (req, res)=>{
  res.send('error');
});

}

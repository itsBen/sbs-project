const chai = require('chai');
const app = require('../app');
const chaiHttp = require('chai-http');
const should = chai.should();

//configure chai  with chaiHttp for testing http request
chai.use(chaiHttp);

/*test /GET route for getting product by name
 should return an empty array since there is no product name wowo */
describe('/GET a product', ()=>{
  it('it should find no product', (done=>{
    chai.request(app).get('/products/name/wowo')
      .end((err,res)=>{
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(0);
        done();
      })
  }))
})

/*test /GET route for getting all categories in the database
 should return array containing 11 categories*/
describe('/GET all categories', ()=>{
  it('it should return 11 categories', (done=>{
    chai.request(app).get('/categories')
      .end((err,res)=>{
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(11);
        done();
      })
  }))
})

/* test /GET route for getting all the stores in the database
  should return an array of 5 stores */
describe('/GET all stores', ()=>{
  it('it should return 5 stores', (done=>{
    chai.request(app).get('/stores')
      .end((err,res)=>{
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(5);
        done();
      })
  }))
})

/* test /GET route for getting product by id
  should return an object representing only 1 item
  with property of a product (for example "size") */

describe('/GET product by id', ()=>{
  it('it should return 1 product only', (done)=>{
    chai.request(app).get('/products/id/59c7eb9bb639741b78730adf')
      .end((err,res)=>{
        res.should.have.status(200);
        res.body.should.be.a('Object');
        const product = res.body;
        product.should.have.property('size');
        product._id.should.be.eql('59c7eb9bb639741b78730adf');
        done();
      })
  })
})

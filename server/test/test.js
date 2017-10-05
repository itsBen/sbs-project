const chai = require('chai');
const app = require('../app');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

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

describe('/GET product by id', ()=>{
  it('it should return 1 product only', (done)=>{
    chai.request(app).get('/products/id/59c7eb9bb639741b78730adf')
      .end((err,res)=>{
        res.should.have.status(200);
        res.body.length.should.be.eql(1);
        const product = res.body[0];
        product.should.have.property('size');
        product._id.should.be.eql('59c7eb9bb639741b78730adf');
        done()
;      })
  })
})

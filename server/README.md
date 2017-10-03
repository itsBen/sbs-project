# Shop Buddy

## Notes about the backend

The backend was made for calculating the delivery costs with additional features to be implemented .

* `express`: NodeJS framework for creating app in server with a REST API
* `mongo`: MongoDB in Mlab and Mongoose for storing/fetching static data for the app
* `firebase`: Firebase Admin SDK for syncing authentication with front-end Firebase, implemented with passport-custom

### Deployment

  Deployed to Heroku under [ShopBuddy](http://api-shopbuddy.herokuapp.com/) with initial data populated in Mlab .

####  REST API URIs:

    * `Get all categories`: http://api-shopbuddy.herokuapp.com/categories
    * `Get product by id`: http://api-shopbuddy.herokuapp.com/products/id/:id
    * `Get products by category`: http://api-shopbuddy.herokuapp.com/products/category/:categoryid
    * `Get stores by id`: http://api-shopbuddy.herokuapp.com/stores/id/:storeid

### Authentication:

  Authentication via Firebase for certain routes to be implemented .

## Requirements

* `npm`

## Development

1. Install dependencies: `npm install`
2. Start the server with nodemon: `npm startdev`

## Other documents

* [CourierApp](../client/courierApp)
* [CustomerApp](../client/customerApp)

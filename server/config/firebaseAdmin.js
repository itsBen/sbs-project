const admin = require('firebase-admin');
const service = require('./serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(service),
  databaseURL: "https://fir-project-58374.firebaseio.com"
}) ;

module.exports = admin ;

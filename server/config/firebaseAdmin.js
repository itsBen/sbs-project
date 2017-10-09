const admin = require('firebase-admin');
const service = require('./serviceAccount.json');

/* the credentials from a temporary/testing firebase App
 are stored in the folder for development */

//initialize firebase app with admin SDK (not client firebase)
admin.initializeApp({
  credential: admin.credential.cert(service),
  databaseURL: "https://fir-project-58374.firebaseio.com"
}) ;

module.exports = admin ;

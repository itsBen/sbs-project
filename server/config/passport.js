const CustomStrategy = require('passport-custom');
const admin = require('./firebaseAdmin');

module.exports = (passport) => {
  passport.use('firebase', new CustomStrategy(
    (req,done)=>{
      admin.auth().verifyIdToken(req.headers.token)
        .then((decodedToken)=>{
          //do things with decoded token here
          console.log(decodedToken);
          req.res.send('succeeded');
        })
        .catch(
          ()=>{
            req.res.status(401).send({ error: 'Token verification failed' });
          }
        )
    }
  ))
}

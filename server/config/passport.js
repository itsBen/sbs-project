const CustomStrategy = require('passport-custom');
const admin = require('./firebaseAdmin');

//protect route via Firebase with custom Strategy Passport
module.exports = (passport) => {
  passport.use('firebase', new CustomStrategy(
    (req,done)=>{
      admin.auth().verifyIdToken(req.headers.token)
        .then((decodedToken)=>{
          //do things with decoded token here
          console.log(decodedToken);
          req.res.send('succeeded');
        })
        //error handling
        .catch(
          ()=>{
            req.res.status(401).send({ error: 'Token verification failed' });
          }
        )
    }
  ))
}

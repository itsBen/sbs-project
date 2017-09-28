import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBKwoPK8425qjHspHNHxUdB_DcvOBie8y0',
  authDomain: 'shopbuddy-447fb.firebaseapp.com',
  databaseURL: 'https://shopbuddy-447fb.firebaseio.com',
  projectId: 'shopbuddy-447fb',
  storageBucket: 'shopbuddy-447fb.appspot.com',
  messagingSenderId: '872099295404',
};

export default (!firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app());

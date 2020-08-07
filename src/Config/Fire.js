import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBiuKjygdUbNrOkOlu7zxbY1XtzAoclEyA",
    authDomain: "time-entry-39065.firebaseapp.com",
    databaseURL: "https://time-entry-39065.firebaseio.com",
    projectId: "time-entry-39065",
    storageBucket: "time-entry-39065.appspot.com",
    messagingSenderId: "567145100472",
    appId: "1:567145100472:web:999d535831842fcdecb04d"
  };

  var fire = firebase.initializeApp(firebaseConfig);
  export default fire;
  
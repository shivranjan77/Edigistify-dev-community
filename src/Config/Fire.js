import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCQScpR7ksoDpdR1PcnMg29NK_qu_mdo1I",
  authDomain: "dev-community-1a663.firebaseapp.com",
  databaseURL: "https://dev-community-1a663.firebaseio.com",
  projectId: "dev-community-1a663",
  storageBucket: "dev-community-1a663.appspot.com",
  messagingSenderId: "996192299981",
  appId: "1:996192299981:web:c27b73887cedf1aff6b284"
};

  var fire = firebase.initializeApp(firebaseConfig);
  export default fire;
  
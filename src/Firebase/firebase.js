import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBQ0Gyat4cPPV2nzd6e3AtRHGVdEr1EFKk",
  authDomain: "sprint5-c8fc1.firebaseapp.com",
  databaseURL: "https://sprint5-c8fc1.firebaseio.com",
  projectId: "sprint5-c8fc1",
  storageBucket: "sprint5-c8fc1.appspot.com",
  messagingSenderId: "1084894109535",
  appId: "1:1084894109535:web:18e3b07cb86daf512660ea",
  measurementId: "G-ZHCJVR0CE2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;
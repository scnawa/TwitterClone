import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBwQGA4rNLDQEQDazBYO2IzTeuZn6v0Jy8",
    authDomain: "nottwitter-778b4.firebaseapp.com",
    projectId: "nottwitter-778b4",
    storageBucket: "nottwitter-778b4.appspot.com",
    messagingSenderId: "888410047308",
    appId: "1:888410047308:web:1807728201f1cbe076c5e9",
    measurementId: "G-WT3SMB01CJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);   

  const db = firebaseApp.firestore();

  export default db;
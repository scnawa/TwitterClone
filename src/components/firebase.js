import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBwQGA4rNLDQEQDazBYO2IzTeuZn6v0Jy8",
    authDomain: "nottwitter-778b4.firebaseapp.com",
    projectId: "nottwitter-778b4",
    storageBucket: "nottwitter-778b4.appspot.com",
    messagingSenderId: "888410047308",
    appId: "1:888410047308:web:1807728201f1cbe076c5e9",
    measurementId: "G-WT3SMB01CJ"
  };

  const firebaseApp = initializeApp(firebaseConfig);   

  export const db = getFirestore(firebaseApp);  
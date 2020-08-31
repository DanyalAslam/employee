
import firebase from 'firebase';
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC-V-ucttxNp9fin-JLC4XqxsjmD1oVfdw",
    authDomain: "employeeapp-firebase-ac308.firebaseapp.com",
    databaseURL: "https://employeeapp-firebase-ac308.firebaseio.com",
    projectId: "employeeapp-firebase-ac308",
    storageBucket: "employeeapp-firebase-ac308.appspot.com",
    messagingSenderId: "900906758941",
    appId: "1:900906758941:web:a99bf8ea84c1041a8aa7f4",
    measurementId: "G-XL6Z0ZDZCP"
  };
 
  // Initialize Firebase
  const Firebase = firebase.initializeApp(firebaseConfig);


  // just before export default statement
  const firestore = Firebase.firestore()

  export default firestore;
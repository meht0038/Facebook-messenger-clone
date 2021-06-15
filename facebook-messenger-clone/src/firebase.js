// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBSO_ePiIZlRBx2zCQmSrN3MPVTYzcilcY",
  authDomain: "facebook-messenger-clone-e7b35.firebaseapp.com",
  projectId: "facebook-messenger-clone-e7b35",
  storageBucket: "facebook-messenger-clone-e7b35.appspot.com",
  messagingSenderId: "319815410984",
  appId: "1:319815410984:web:7fd64f168f1e026d919c1d",
  measurementId: "G-6D244D8LC8"

});

const db = firebaseApp.firestore();

export default db;
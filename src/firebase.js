// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA0RRRD64hp0TcoNE1qEnlJYhFKphARxJc",
  authDomain: "twitter-clone-9b104.firebaseapp.com",
  projectId: "twitter-clone-9b104",
  storageBucket: "twitter-clone-9b104.appspot.com",
  messagingSenderId: "1036926134044",
  appId: "1:1036926134044:web:8f1deb204f7ab7eb49bcd9",
  measurementId: "G-10B8YZ01ZY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

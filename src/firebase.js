import firebase from "firebase/app";
import "firebase/firestore";

let config = {
  apiKey: "AIzaSyDi7FjDiW3Q1gElfKebhMeCRpugIjaCY0o",
  authDomain: "myanflix-35e8e.firebaseapp.com",
  databaseURL: "https://myanflix-35e8e.firebaseio.com",
  projectId: "myanflix-35e8e",
  storageBucket: "myanflix-35e8e.appspot.com",
  messagingSenderId: "990951883734",
  appId: "1:990951883734:web:464751fa3fdfcef8579a77",
  measurementId: "G-TY1985X3SR",
};

firebase.initializeApp(config);

export default firebase.firestore();

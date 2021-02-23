import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDGxjgGMK4I0nm_-kQOtu1cMmDYQbnEOU4",
  authDomain: "online-banking-df325.firebaseapp.com",
  databaseURL: "https://online-banking-df325-default-rtdb.firebaseio.com",
  projectId: "online-banking-df325",
  storageBucket: "online-banking-df325.appspot.com",
  messagingSenderId: "300238488073",
  appId: "1:300238488073:web:8130b70bcbace7f060aed8",
};

// Initialize Firebase
export const firebasePayment = firebase.initializeApp(
  firebaseConfig,
  "Payment Verification"
);

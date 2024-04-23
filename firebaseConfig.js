// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// import { setDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB24_U9Hr45fjUe2vNQmUh8Z28qWb0NR5U",
  authDomain: "grounds-app-9bba6.firebaseapp.com",
  projectId: "grounds-app-9bba6",
  storageBucket: "grounds-app-9bba6.appspot.com",
  messagingSenderId: "240898864864",
  appId: "1:240898864864:web:a11f3b1b19992426598285",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const firebasetest = firebase;

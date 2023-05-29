// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4NKOu9RReooHR84KJdwjV057Kjz5kO78",
  authDomain: "security-shopping.firebaseapp.com",
  databaseURL: "https://security-shopping-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "security-shopping",
  storageBucket: "security-shopping.appspot.com",
  messagingSenderId: "236136784788",
  appId: "1:236136784788:web:8b445c11ec2d3606366581",
  measurementId: "G-Q7JRR7E53D"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
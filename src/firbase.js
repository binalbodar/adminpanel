// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-NQIJo05cXbl-qb5EEzkvlHCHt2UHKrA",
  authDomain: "fir-21fa2.firebaseapp.com",
  projectId: "fir-21fa2",
  storageBucket: "fir-21fa2.appspot.com",
  messagingSenderId: "1031058970590",
  appId: "1:1031058970590:web:8215099089b62149a36f4f",
  measurementId: "G-7X6R4B5F9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
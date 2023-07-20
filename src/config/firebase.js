// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_NpbhagmzaUMNp7pXh2SKtzrgx5PXjZ4",
  authDomain: "fir-demo-a7081.firebaseapp.com",
  projectId: "fir-demo-a7081",
  storageBucket: "fir-demo-a7081.appspot.com",
  messagingSenderId: "477757782079",
  appId: "1:477757782079:web:eb26e669139ee3ee35608a",
  measurementId: "G-VN1H0EJ5TK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

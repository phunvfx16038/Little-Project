// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIued9hSh7PJYs6rtvm3A_z3L0SXYJo54",
  authDomain: "little-c9df5.firebaseapp.com",
  projectId: "little-c9df5",
  storageBucket: "little-c9df5.appspot.com",
  messagingSenderId: "105121618948",
  appId: "1:105121618948:web:f4507d6fb6479cc13e6951",
  measurementId: "G-K3E97DFJ7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
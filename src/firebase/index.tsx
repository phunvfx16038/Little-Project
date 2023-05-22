// Import the functions you need from the SDKs you need

import * as firebase from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1D0KdUo2JdehJIVTjlMIQW_lzqac2RAQ",
  authDomain: "littleproject-fbc73.firebaseapp.com",
  projectId: "littleproject-fbc73",
  storageBucket: "littleproject-fbc73.appspot.com",
  messagingSenderId: "223402673237",
  appId: "1:223402673237:web:c1e440db4a3d0e4adc00dc",
  measurementId: "G-JGFRSCXJ06",
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);

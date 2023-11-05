// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCBZzSxoQ1T3bCKoA73hqIM-CXQendu5xM",
  authDomain: "todo-aaca8.firebaseapp.com",
  projectId: "todo-aaca8",
  storageBucket: "todo-aaca8.appspot.com",
  messagingSenderId: "871634933490",
  appId: "1:871634933490:web:157f78525086e18852226b",
  measurementId: "G-BKWL2R33PT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app, auth};
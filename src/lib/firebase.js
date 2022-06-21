import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCSaI8gU2tX2Zh8ieL6xUUlBpy01PyynNg",
  authDomain: "fir-pr-e05d5.firebaseapp.com",
  projectId: "fir-pr-e05d5",
  storageBucket: "fir-pr-e05d5.appspot.com",
  messagingSenderId: "124820285294",
  appId: "1:124820285294:web:61c5cb7e2447e28899037f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
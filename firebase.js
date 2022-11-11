// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4SXSI5xBM1oqvoJRQmwLN0-_oJIvHe8M",
  authDomain: "facebook-c0c5e.firebaseapp.com",
  projectId: "facebook-c0c5e",
  storageBucket: "facebook-c0c5e.appspot.com",
  messagingSenderId: "501952107381",
  appId: "1:501952107381:web:e878bd8cec7b6736e8793c"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
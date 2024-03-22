// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrJzwDssW0rAfdK20d6xQzd13uVhfCt2M",
  authDomain: "project-unisnack.firebaseapp.com",
  projectId: "project-unisnack",
  storageBucket: "project-unisnack.appspot.com",
  messagingSenderId: "600484611234",
  appId: "1:600484611234:web:4d73e9872a9ecbff8583fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const FIREBASE_DB = getFirestore(app);

const FIREBASE_AUTH = getAuth(app);

export {FIREBASE_DB, FIREBASE_AUTH};
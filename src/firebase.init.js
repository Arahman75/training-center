// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2UiTtuGnK1GwR2mdimKdbsHsJCl-TzXE",
  authDomain: "training-center-657d4.firebaseapp.com",
  projectId: "training-center-657d4",
  storageBucket: "training-center-657d4.appspot.com",
  messagingSenderId: "999983235828",
  appId: "1:999983235828:web:f9de9423db50cf27ee94a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
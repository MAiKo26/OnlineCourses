// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_TRXD_FGxsJyiDmEemltloN4OsQKQ2ow",
  authDomain: "react-pedrotech-course.firebaseapp.com",
  projectId: "react-pedrotech-course",
  storageBucket: "react-pedrotech-course.appspot.com",
  messagingSenderId: "838614282267",
  appId: "1:838614282267:web:5a1cc1741b9e4870bec8be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

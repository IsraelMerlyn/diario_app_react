// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkQpkaPzVr7w9HW7l0aYlYXib3HiaZ9jY",
  authDomain: "journal-israelmerlyn.firebaseapp.com",
  projectId: "journal-israelmerlyn",
  storageBucket: "journal-israelmerlyn.appspot.com",
  messagingSenderId: "465462776750",
  appId: "1:465462776750:web:f70fcfbbc2d07f2754ae3f"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );
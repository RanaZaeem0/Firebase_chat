// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth,GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, addDoc, setDoc, collection } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOkFQbpd_fRueQnH6PXF5WbIP451tV6UU",
  authDomain: "socailmedia-32217.firebaseapp.com",
  projectId: "socailmedia-32217",
  storageBucket: "socailmedia-32217.appspot.com",
  messagingSenderId: "211457430319",
  appId: "1:211457430319:web:9dea3c8ba658d3191bc7da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export const googleProvider  = new GoogleAuthProvider()
export const storage = getStorage(app)
export {
  app,

  auth,
  db,
  addDoc,
  setDoc,
  collection
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBT_uu4nfstu4AZPaVgmNXV_9QPVpB3_I",
  authDomain: "fullgamehub.firebaseapp.com",
  projectId: "fullgamehub",
  storageBucket: "fullgamehub.appspot.com",
  messagingSenderId: "431833106730",
  appId: "1:431833106730:web:9ec58d96ec3f4cd8737653"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const storage = getStorage(app);
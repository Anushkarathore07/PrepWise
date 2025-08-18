import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyADKDkAFJ5miUoaHo6e9qEPOACdPO8TDP8",
  authDomain: "prepwise-aec9a.firebaseapp.com",
  projectId: "prepwise-aec9a",
  storageBucket: "prepwise-aec9a.firebasestorage.app",
  messagingSenderId: "999791216557",
  appId: "1:999791216557:web:16bb01877056778bf9c324",
  measurementId: "G-H85M5T84JW"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
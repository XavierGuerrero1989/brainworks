// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxm_awdtgx-ZxcXObGwq1nRcngtJ5y_4E",
  authDomain: "brainworks-c474d.firebaseapp.com",
  projectId: "brainworks-c474d",
  storageBucket: "brainworks-c474d.firebasestorage.app",
  messagingSenderId: "953384993473",
  appId: "1:953384993473:web:11718471148323f0fd0a40"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

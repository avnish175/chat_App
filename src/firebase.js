import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC0-0G85pdfJu__TZZBscYWUc3JNxHtLEM",
  authDomain: "chat-2c872.firebaseapp.com",
  databaseURL: "https://chat-2c872-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-2c872",
  storageBucket: "chat-2c872.appspot.com",
  messagingSenderId: "670543263627",
  appId: "1:670543263627:web:c8c62d464b9647c322e18e",
  measurementId: "G-CV37YL2BNJ"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"; // Import getStorage for Firebase Storage

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "movie-95f0f.firebaseapp.com",
  projectId: "movie-95f0f",
  storageBucket: "movie-95f0f.appspot.com",
  messagingSenderId: "1065035933882",
  appId: "1:1065035933882:web:9d4bf69a3177c56ef07a83",
  measurementId: "G-J3Z4M86T9S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app); // Initialize Firebase Storage

export { app, analytics, storage };
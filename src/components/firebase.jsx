// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"; // Import getStorage for Firebase Storage

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "movie-app-a2f6d.firebaseapp.com",
  projectId: "movie-app-a2f6d",
  storageBucket: "movie-app-a2f6d.appspot.com",
  messagingSenderId: "523965798124",
  appId: "1:523965798124:web:cb4bc3f978917a26e037c9",
  measurementId: "G-GDWNYHC8DW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app); // Initialize Firebase Storage

export { app, analytics, storage };
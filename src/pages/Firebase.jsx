// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABZpvRsFPjTzT3CF7jF_SgUF6xOGWXHeI",
  authDomain: "auth-10-12-2006.firebaseapp.com",
  projectId: "auth-10-12-2006",
  storageBucket: "auth-10-12-2006.firebasestorage.app",
  messagingSenderId: "499458425502",
  appId: "1:499458425502:web:7bd101409de2d09682f18f",
  measurementId: "G-W4K1F1ZK56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;
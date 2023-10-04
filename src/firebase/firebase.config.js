// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhyWG4yayznDvDLWhwqSVrJTYn0Wv-1zA",
  authDomain: "dragon-news-a95b5.firebaseapp.com",
  projectId: "dragon-news-a95b5",
  storageBucket: "dragon-news-a95b5.appspot.com",
  messagingSenderId: "645195177619",
  appId: "1:645195177619:web:bf0a188861a37c6ae77766"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
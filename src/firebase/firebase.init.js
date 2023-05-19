// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3NBPKE5AtZsMhaWj2uQEQRlShaYFpKd4",
  authDomain: "ema-john-simple-auth-87ded.firebaseapp.com",
  projectId: "ema-john-simple-auth-87ded",
  storageBucket: "ema-john-simple-auth-87ded.appspot.com",
  messagingSenderId: "1078832648359",
  appId: "1:1078832648359:web:4da21270d15ffc5d8f4b82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
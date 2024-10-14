// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcj4gvFm3bjxTnY4L4MF7cFppL8-cTAtU",
  authDomain: "test-auth-a7527.firebaseapp.com",
  projectId: "test-auth-a7527",
  storageBucket: "test-auth-a7527.appspot.com",
  messagingSenderId: "787044427724",
  appId: "1:787044427724:web:ea69189c5dc71cd541df69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
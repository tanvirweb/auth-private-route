// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnHQTq2lluT_s9JzDoufz7lvNciFCHXEw",
  authDomain: "auth-private-route-e0a4d.firebaseapp.com",
  projectId: "auth-private-route-e0a4d",
  storageBucket: "auth-private-route-e0a4d.appspot.com",
  messagingSenderId: "214646733487",
  appId: "1:214646733487:web:871553eb3f448d21c0b25a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
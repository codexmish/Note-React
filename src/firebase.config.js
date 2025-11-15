// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCthF2Xtwgg6WvI40hYAGvI7JoezcL4A0o",
  authDomain: "note-react-f6fa0.firebaseapp.com",
  projectId: "note-react-f6fa0",
  storageBucket: "note-react-f6fa0.firebasestorage.app",
  messagingSenderId: "810877030096",
  appId: "1:810877030096:web:e09133c563cca3798f18d5",
  measurementId: "G-XCG1GR6CJL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtbHRGvr0WYayX-PeDoNQ0ahISPRIf5Ow",
  authDomain: "misiontic-upb.firebaseapp.com",
  projectId: "misiontic-upb",
  storageBucket: "misiontic-upb.appspot.com",
  messagingSenderId: "799778553885",
  appId: "1:799778553885:web:d5e987c7c24b8d595506f4",
  measurementId: "G-V55W82PXSX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
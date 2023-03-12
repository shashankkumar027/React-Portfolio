// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwpz1UeNN76ZtUcOrFtyvW_twpiyByw94",
  authDomain: "react-portfolio-shashank.firebaseapp.com",
  projectId: "react-portfolio-shashank",
  storageBucket: "react-portfolio-shashank.appspot.com",
  messagingSenderId: "1022982137181",
  appId: "1:1022982137181:web:fc379c0a584855f31474b4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();

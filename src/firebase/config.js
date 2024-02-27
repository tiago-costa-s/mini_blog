// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from 'firebase/firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRW9TpaiF7xPpJ5q_2tIAJrmV-hNl2Z5U",
    authDomain: "miniblog-423e6.firebaseapp.com",
    projectId: "miniblog-423e6",
    storageBucket: "miniblog-423e6.appspot.com",
    messagingSenderId: "952439563101",
    appId: "1:952439563101:web:00731bdfa74ae589917eb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFireStore(app);

export { db };
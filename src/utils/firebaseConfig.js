// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDr7ZpOS6aSh8d5RhrLQm7KyXbmUJ0N6tA",
    authDomain: "lacroix-patissier.firebaseapp.com",
    projectId: "lacroix-patissier",
    storageBucket: "lacroix-patissier.appspot.com",
    messagingSenderId: "195606909766",
    appId: "1:195606909766:web:4a491e4a1f970db7098b47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
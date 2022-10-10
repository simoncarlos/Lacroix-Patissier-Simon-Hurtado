// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBnJVkBwFJUETmWfIGdoPg_ORhTluzuyY",
    authDomain: "lacroix-patissier-60604.firebaseapp.com",
    projectId: "lacroix-patissier-60604",
    storageBucket: "lacroix-patissier-60604.appspot.com",
    messagingSenderId: "1060804777796",
    appId: "1:1060804777796:web:b93d9d248168efa795e911",
    measurementId: "G-63W6CYH8Y9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
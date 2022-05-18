import { initializeApp } from "firebase/app";
import { getFirestore , collection } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyADgkGnvpKfpYlNCt6kgGP3Mow8mA7Z4qg",
    authDomain: "portfolio-28f75.firebaseapp.com",
    projectId: "portfolio-28f75",
    storageBucket: "portfolio-28f75.appspot.com",
    messagingSenderId: "237784548600",
    appId: "1:237784548600:web:1dd9d1727a39b24278670d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export default db;

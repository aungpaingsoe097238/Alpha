import { initializeApp } from "firebase/app";
import { getFirestore , collection } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBPREFjkRuqrOVfT3dAX5eX6VS1aDh0aVk",
    authDomain: "fir-vue-2b593.firebaseapp.com",
    projectId: "fir-vue-2b593",
    storageBucket: "fir-vue-2b593.appspot.com",
    messagingSenderId: "391307632049",
    appId: "1:391307632049:web:adaab34b6187ceedee7190"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export default db;

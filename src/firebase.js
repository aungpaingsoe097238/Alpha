import { initializeApp } from "firebase/app";
import { getFirestore , collection } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAWCfFV1wT4ghgBKy42MLx_SPBPXX4Rgug",
    authDomain: "portfolio-d2e2c.firebaseapp.com",
    projectId: "portfolio-d2e2c",
    storageBucket: "portfolio-d2e2c.appspot.com",
    messagingSenderId: "494212111153",
    appId: "1:494212111153:web:0b50c6e178bab976d7ee10",
    measurementId: "G-SP24KZSMTZ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export default db;

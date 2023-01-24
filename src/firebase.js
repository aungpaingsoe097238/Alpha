import { initializeApp } from "firebase/app";
import { getFirestore , collection } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Release
// const firebaseConfig = {
//     apiKey: "AIzaSyAWCfFV1wT4ghgBKy42MLx_SPBPXX4Rgug",
//     authDomain: "portfolio-d2e2c.firebaseapp.com",
//     projectId: "portfolio-d2e2c",
//     storageBucket: "portfolio-d2e2c.appspot.com",
//     messagingSenderId: "494212111153",
//     appId: "1:494212111153:web:0b50c6e178bab976d7ee10",
//     measurementId: "G-SP24KZSMTZ"
//   };

// Testing 
const firebaseConfig = {
  apiKey: "AIzaSyBuUODcJ6qGaDP37lvui2GMNxPO65VFEuA",
  authDomain: "testing-dbacd.firebaseapp.com",
  projectId: "testing-dbacd",
  storageBucket: "testing-dbacd.appspot.com",
  messagingSenderId: "945365672199",
  appId: "1:945365672199:web:84fb0d86cc128be97225a2",
  measurementId: "G-XTQWR58SN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export default db;

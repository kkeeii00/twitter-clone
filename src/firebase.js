// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZRx4-gA6dDPAhMVWkti-kiAFLntY3cAY",
  authDomain: "twitter-clone-17942.firebaseapp.com",
  projectId: "twitter-clone-17942",
  storageBucket: "twitter-clone-17942.appspot.com",
  messagingSenderId: "528150493847",
  appId: "1:528150493847:web:e027c8ef87f466b36247d2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;

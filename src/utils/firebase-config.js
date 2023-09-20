
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBymlfbI8b1uOXrnbxxQfbx9B9o-UR_QFs",
  authDomain: "react-netflix-clone-c5154.firebaseapp.com",
  projectId: "react-netflix-clone-c5154",
  storageBucket: "react-netflix-clone-c5154.appspot.com",
  messagingSenderId: "463200616304",
  appId: "1:463200616304:web:96be8058ad7188490ad9b5",
  measurementId: "G-R817Q9RL11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);
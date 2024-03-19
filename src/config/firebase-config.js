import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaZ8bpE9joK9DtlCNzMDCJoDKp_cPsXO4",
  authDomain: "shops-data-34658.firebaseapp.com",
  projectId: "shops-data-34658",
  storageBucket: "shops-data-34658.appspot.com",
  messagingSenderId: "914384489752",
  appId: "1:914384489752:web:6497971b27abd1657f626d",
  measurementId: "G-QTK4EELEXM",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db =getFirestore(app);


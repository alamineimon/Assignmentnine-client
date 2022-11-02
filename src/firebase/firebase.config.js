// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectID,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderID,
  appId: process.env.REACT_APP_appId,
  apiKey: "AIzaSyAOSDjp573Seq9qO5a6dRyCY-CcpUsY6_w",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
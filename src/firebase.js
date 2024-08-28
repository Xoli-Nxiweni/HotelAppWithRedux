// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtN8IJTVyI2UhFecJPyWIY92ZgCo1Dql8",
  authDomain: "hotelapp-323da.firebaseapp.com",
  projectId: "hotelapp-323da",
  storageBucket: "hotelapp-323da.appspot.com",
  messagingSenderId: "511781411551",
  appId: "1:511781411551:web:410dc1a0de32609323276a",
  measurementId: "G-SY54PBNK73"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };

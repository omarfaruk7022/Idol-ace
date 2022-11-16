import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKWYiu6i9wr73X_1ZP2smuLhVyzxZGioA",
  authDomain: "idol-ace.firebaseapp.com",
  projectId: "idol-ace",
  storageBucket: "idol-ace.appspot.com",
  messagingSenderId: "998002684196",
  appId: "1:998002684196:web:6670ae9b95eb7bdcf5c3b1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

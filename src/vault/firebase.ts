import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWdeKWyKD-0PBIYLhY1sboBN_xwIg6Wuk",
  authDomain: "portfolio-vault-4d799.firebaseapp.com",
  projectId: "portfolio-vault-4d799",
  storageBucket: "portfolio-vault-4d799.firebasestorage.app",
  messagingSenderId: "631798777379",
  appId: "1:631798777379:web:370a18111a7b9e6ccb9396"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
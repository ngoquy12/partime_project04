import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0uB_qwXm2Cy0n2UtLhXdMJMmy6UuLH_s",
  authDomain: "project-module04.firebaseapp.com",
  projectId: "project-module04",
  storageBucket: "project-module04.appspot.com",
  messagingSenderId: "53459133260",
  appId: "1:53459133260:web:5f87bb640d82ac049e25e9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Dịch vụ đăng nhập với google
export const provider = new GoogleAuthProvider();

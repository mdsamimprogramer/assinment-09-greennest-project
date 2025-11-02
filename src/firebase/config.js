import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeiBgGIdHeWErpGTEJJvo5y4q2PnRZgXo",
  authDomain: "asinment-8.firebaseapp.com",
  projectId: "asinment-8",
  storageBucket: "asinment-8.firebasestorage.app",
  messagingSenderId: "1033448243469",
  appId: "1:1033448243469:web:37739b459e49e892c33044",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

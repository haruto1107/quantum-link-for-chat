// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "AIzaSyA7hliguaqhkVXufJPP2X3u0ekIdK4XbWU",
  authDomain: "quantum-link-for-chat.firebaseapp.com",
  projectId: "quantum-link-for-chat",
  storageBucket: "quantum-link-for-chat.firebasestorage.app",
  messagingSenderId: "222382991426",
  appId: "1:222382991426:web:43326da4ed94d7fb37a5db"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

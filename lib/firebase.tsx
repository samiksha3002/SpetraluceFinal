// firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxrTV0TdzuhjehNgT8sBG8ypu-gvZBN5Y",
  authDomain: "spetraluce-product.firebaseapp.com",
  projectId: "spetraluce-product",
  storageBucket: "spetraluce-product.firebasestorage.app",
  messagingSenderId: "424760971682",
  appId: "1:424760971682:web:a460be88fddf315a7be2fb",
  measurementId: "G-N1K21BVJ80"
};

// Prevent re-initialization on hot reload
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
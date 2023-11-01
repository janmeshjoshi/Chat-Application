
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyDproD0MjjrWm_oENTrgwX1NAjECia5u-M",
  authDomain: "chat-b7c0c.firebaseapp.com",
  projectId: "chat-b7c0c",
  storageBucket: "chat-b7c0c.appspot.com",
  messagingSenderId: "845285517412",
  appId: "1:845285517412:web:0cf86efa3a6617eaa29771"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();


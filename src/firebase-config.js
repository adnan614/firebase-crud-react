import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALLQzo7C87xTfzF6Acghi5QZHxVb1vL4I",

  authDomain: "fir-crud-20c59.firebaseapp.com",

  projectId: "fir-crud-20c59",

  storageBucket: "fir-crud-20c59.appspot.com",

  messagingSenderId: "310193766173",

  appId: "1:310193766173:web:f56a61b72783c88d70ebf4",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

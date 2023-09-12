// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5ejKYtrbnVyA0DfJVAgilTmpflV3E2mM",
  authDomain: "projeto-board-tarefas-c8fdf.firebaseapp.com",
  projectId: "projeto-board-tarefas-c8fdf",
  storageBucket: "projeto-board-tarefas-c8fdf.appspot.com",
  messagingSenderId: "1076880420389",
  appId: "1:1076880420389:web:9a01c8ee803c63e90f59cc",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };

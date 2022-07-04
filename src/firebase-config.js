
import { initializeApp } from "firebase/app";

import {getFirestore} from "@firebase/firestore";
//creates connection using config object

const firebaseConfig = {
    apiKey: "AIzaSyBsdxp2Bhbn7XViJs9O0EQxwSnhwi-YgSg",
    authDomain: "surfboard-7b86f.firebaseapp.com",
    projectId: "surfboard-7b86f",
    storageBucket: "surfboard-7b86f.appspot.com",
    messagingSenderId: "32421705608",
    appId: "1:32421705608:web:210e9df629e5f4a2102c3d",
    measurementId: "G-C2P2NYNGW6"
  };

  const app = initializeApp(firebaseConfig);


  export const db = getFirestore() ;
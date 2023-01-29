import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDTMFwmGUtl4QREHsmLG2LFkh1kKm_Grkk",
    authDomain: "fir-test-d8555.firebaseapp.com",
    projectId: "fir-test-d8555",
    storageBucket: "fir-test-d8555.appspot.com",
    messagingSenderId: "603496986205",
    appId: "1:603496986205:web:1f6d23cffe796f798ebfb4",
    measurementId: "G-KFC8KPLN5Z"
  };

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app)
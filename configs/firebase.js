import { initializeApp} from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyAsiv9a2H5XLkVPO4vUijaSfD6ansStoWU",
  authDomain: "consmathdatabase.firebaseapp.com",
  databaseURL: "https://consmathdatabase-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "consmathdatabase",
  storageBucket: "consmathdatabase.appspot.com",
  messagingSenderId: "785666359961",
  appId: "1:785666359961:web:e73ba8be2d5cdebce72e08",
  measurementId: "G-S1EHS58P31"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig); // initialize app
export const db = getFirestore(); // this gets the firestore database
//const analytics = getAnalytics(firebaseApp);

//### REGISTER USER WITH FIREBASE AUTHENTICATION ###//
export const registerUser = (login, password) => {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, login, password);
};

//### LOGIN USER WITH FIREBASE ###//
export const loginUser = (login, password) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, login, password);
};

export const logoutUser = () =>{
  const auth = getAuth();
  return signOut(auth);
}

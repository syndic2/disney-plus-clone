import { initializeApp, FirebaseApp } from 'firebase/app';
import { getFirestore, collection, doc, getDocs, setDoc, addDoc } from 'firebase/firestore';
//import 'firebase/compat/auth';
//import 'firebase/compat/firestore';

const firebaseConfig: any = {
	apiKey: "AIzaSyDplrnLNHB_B-T-OZCONJr8LkjOxkbkdc8",
	authDomain: "disney-plus-clone-5b4fa.firebaseapp.com",
	projectId: "disney-plus-clone-5b4fa",
	storageBucket: "disney-plus-clone-5b4fa.appspot.com",
	messagingSenderId: "905764143973",
	appId: "1:905764143973:web:66ff33e1a3659625e6978c"
};

const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db, collection, doc, getDocs, setDoc, addDoc };


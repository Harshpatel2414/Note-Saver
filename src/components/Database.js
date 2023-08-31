import { initializeApp } from 'firebase/app';
import {
    collection, getFirestore,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "todo-app-63d70.firebaseapp.com",
    projectId: "todo-app-63d70",
    storageBucket: "todo-app-63d70.appspot.com",
    messagingSenderId: "633412619486",
    appId: "1:633412619486:web:a5f9c32731bdb79256064f"
};

initializeApp(firebaseConfig);

export const db = getFirestore();
//give collection referance
export const colRef = collection(db, 'notes');
//set query for fetching data according query
// const  q = query(colRef,where("description" ,'==','pubg player'))

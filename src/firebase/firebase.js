import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyC2osuH-ep2HXVJGy4XJonxJMn5NT3INAc",
    authDomain: "amphi-79250.firebaseapp.com",
    projectId: "amphi-79250",
    storageBucket: "amphi-79250.appspot.com",
    messagingSenderId: "75022099257",
    appId: "1:75022099257:web:e315c98e5e7f6ad951fee8",
    measurementId: "G-DT228J6RWR"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
export { auth, database };
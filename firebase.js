import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCTpaPcNZti-IyrnP-ae3nsR8-kxNayuns",
    authDomain: "barbie-c36f4.firebaseapp.com",
    projectId: "barbie-c36f4",
    storageBucket: "barbie-c36f4.appspot.com",
    messagingSenderId: "238027243856",
    appId: "1:238027243856:web:4a14f4379215cee7892c55",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

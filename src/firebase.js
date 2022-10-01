import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyCV-GNcEsix4pLAO7ewtS2LDBfBAGzUBuQ",
    authDomain: "todos-126de.firebaseapp.com",
    projectId: "todos-126de",
    storageBucket: "todos-126de.appspot.com",
    messagingSenderId: "172094231766",
    appId: "1:172094231766:web:18be193d70407b4bc1a577",
    databaseURL: "https://todos-126de-default-rtdb.europe-west1.firebasedatabase.app/"
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
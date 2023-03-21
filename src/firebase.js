
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA3G1WRr0WC5t7FPo7me4M9eQOYe1p6TPE",
    authDomain: "books-shop-24e7d.firebaseapp.com",
    projectId: "books-shop-24e7d",
    storageBucket: "books-shop-24e7d.appspot.com",
    messagingSenderId: "520701548383",
    appId: "1:520701548383:web:0c3d42395cba1e2741c8ea"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
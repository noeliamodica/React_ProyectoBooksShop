
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-rkD9qRtX-WJ_tkoedG92_OlOHXQrPwg",
  authDomain: "firabase-login-4e69c.firebaseapp.com",
  projectId: "firabase-login-4e69c",
  storageBucket: "firabase-login-4e69c.appspot.com",
  messagingSenderId: "689917288407",
  appId: "1:689917288407:web:3d2c2d989ed980f6d8b592"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
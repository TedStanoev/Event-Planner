import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database'

export const firebaseConfig = {
  apiKey: "AIzaSyAwA9kw7FP9Gso5nkNrfoxFwMhV7M0dv_Y",
  authDomain: "fir-5da5e.firebaseapp.com",
  databaseURL: "https://fir-5da5e-default-rtdb.firebaseio.com",
  projectId: "fir-5da5e",
  storageBucket: "fir-5da5e.appspot.com",
  messagingSenderId: "886229803058",
  appId: "1:886229803058:web:028d0581bff65d443fdc2b",
  measurementId: "G-2PXWET18TL"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getDatabase(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCbwJRfNCcSl8nlYL74tIYvNo6ZlUiB3yc",
    authDomain: "netflixgpt-c063a.firebaseapp.com",
    projectId: "netflixgpt-c063a",
    storageBucket: "netflixgpt-c063a.appspot.com",
    messagingSenderId: "188964518695",
    appId: "1:188964518695:web:572847b490a6efad248702",
    measurementId: "G-KNP8PVZXWP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

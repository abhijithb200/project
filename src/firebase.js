import firebase from "firebase";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBnEgMtwekp0nUqHLHGiA5zHBJH0XPBp1Y",
    authDomain: "project-622e4.firebaseapp.com",
    projectId: "project-622e4",
    storageBucket: "project-622e4.appspot.com",
    messagingSenderId: "728554211180",
    appId: "1:728554211180:web:f9cbc6b4500209d4189549",
    measurementId: "G-VBH1DZZZBJ"
})

const db = app.firestore()
const auth = firebase.auth();

export default db
export {auth}
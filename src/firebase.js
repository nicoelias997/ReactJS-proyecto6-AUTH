import app from "firebase/compat/app" //con esto config firebase
import "firebase/compat/firestore"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBO3COeWxbxDTIiQW6RTCLYpBZxKyo1XHw",
    authDomain: "crud-databae.firebaseapp.com",
    projectId: "crud-databae",
    storageBucket: "crud-databae.appspot.com",
    messagingSenderId: "14099606275",
    appId: "1:14099606275:web:ab39c5960203e883e11736"
  };
  
app.initializeApp(firebaseConfig);

const dataBase = app.firestore()
const auth = app.auth()

export {dataBase, auth}
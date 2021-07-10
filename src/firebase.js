import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBP7HmBSxPB_krxGccu2ry2AqzDKTGOHyo",
    authDomain: "cinerama-auth-development.firebaseapp.com",
    projectId: "cinerama-auth-development",
    storageBucket: "cinerama-auth-development.appspot.com",
    messagingSenderId: "448453082357",
    appId: "1:448453082357:web:3ae97bd6e8d3900023d9bc"
})
export const auth = app.auth()
export default app
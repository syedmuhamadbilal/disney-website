import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCz1HyupEMVs3OmjlLpYklsLZets3jdZrc",
    authDomain: "disneyplus-clone-9eb73.firebaseapp.com",
    projectId: "disneyplus-clone-9eb73",
    storageBucket: "disneyplus-clone-9eb73.appspot.com",
    messagingSenderId: "1003257286295",
    appId: "1:1003257286295:web:69f06f8a5274df621d23d2",
    measurementId: "G-T6Y9151ZD2"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebase.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage();
  export{auth,provider,storage}
  export default db
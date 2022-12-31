import GoogleIcon from '@mui/icons-material/Google';
import * as firebase from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from 'react';
import firebaseConfig from '../../firebase.config';
const Login = () => {
    firebase.initializeApp(firebaseConfig);
   const handleGoogleSignIn = () =>{
        const provider = new GoogleAuthProvider();

     const auth = getAuth();
       signInWithPopup(auth, provider)
       .then((result) => {
         const credential = GoogleAuthProvider.credentialFromResult(result);
         const token = credential.accessToken;

         const user = result.user;
         console.log(user);
         
    // ...
  }).catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;

    const email = error.customData.email;

    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    }
    return (
        <div>
            <br />
            <br />
            <button onClick={handleGoogleSignIn}><GoogleIcon />Login With Google</button>
            <p>{}</p>
        </div>
    );
};

export default Login;
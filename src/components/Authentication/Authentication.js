import * as firebase from 'firebase/app';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import firebaseConfig from '../../firebase.config';
const Authentication = () => {
    const [newUser,setNewUser] = useState(false)
    const [user,setUser] = useState({
        isLogin:false,
        name:'',
        email:'',
        password:'',
        error:'',
        success:false
    });
    firebase.initializeApp(firebaseConfig)
        const handleGoogleSignUP = () =>{
            const googleProvider = new GoogleAuthProvider();
             const auth = getAuth();
             signInWithPopup(auth,googleProvider)
                .then(res =>{
                    const {email,displayName} = res.user;
                    const loginInfo = {
                        isLogin:true,
                        name:displayName,
                        email:email
                    }
                    setUser(loginInfo);
                })
                .catch(error =>{
                    console.log(error)
                })
        }
        const handleLogOut = () =>{
            const auth = getAuth();
                signOut(auth)
                    .then(res =>{
                        const logOut = {
                            isLogin:false,
                            name:'',
                            email:'',
                        }
                        setUser(logOut);
                    })
                
        }
        const handleFacebookLogin = () =>{
            const faecbookProvider = new FacebookAuthProvider();
            const auth = getAuth();
                signInWithPopup(auth, faecbookProvider)
                .then(res => {
                    console.log(res);
                })
                .catch((error) => {
                    const credential = FacebookAuthProvider.credentialFromError(error);
                    console.log(credential);
                    // ...
                });
        }
        const handleGitHubLogin = () =>{
            const gitHubProvider = new GithubAuthProvider();

        const auth = getAuth();
        signInWithPopup(auth, gitHubProvider)
            .then( res => {
                console.log(res);
            }).catch( error => {
                console.log(error)
            });
            }
        const handleBlur = (e) =>{
                let isValid ;
            if(e.target.name === 'email'){
                isValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value);
          
            }
            if(e.target.name === 'password'){
                const passwordLength = e.target.value.length > 6;
                const passwordValid = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(e.target.value);
                isValid = passwordLength && passwordValid
            }
            if(e.target.name === 'name'){
                isValid = e.target.value;
            }
            if(e.target.name ==='number'){
                isValid = /^(?:\+88|01)?\d{11}\r?$/.test(e.target.value);
            }
            if(isValid){
               const newUserInfo= {...user};
               newUserInfo[e.target.name] = e.target.value;
               setUser(newUserInfo);
            }
        }
        const handleFormSubmit = (e) =>{

          if(newUser &&user.email && user.password){
                const auth = getAuth();
                createUserWithEmailAndPassword(auth, user.email, user.password)
                .then( res => {
                    const newUserInfo = {...user};
                    newUserInfo.error = '';
                    console.log(res);
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    updateUserName(user.name);
                })
                .catch((error) => {
                    const newUserInfo = {...user};
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    // ..
                });
                 }
                if(!newUser && user.email && user.password){
                    const auth = getAuth();
                        signInWithEmailAndPassword(auth, user.email, user.password)
                        .then( res => {
                            const newUserInfo = {...user};
                            newUserInfo.error = '';
                            newUserInfo.success = true;
                            newUserInfo.name = res.user.displayName;
                            setUser(newUserInfo);
                            console.log('sign in user information',res.user);
                        })
                        .catch(error => {
                            const newUserInfo = {...user};
                            newUserInfo.error = error.message;
                            newUserInfo.success = false;
                            setUser(newUserInfo);
                        });
                    }
             e.preventDefault()       
        }
        const updateUserName = name =>{
            const auth = getAuth();
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(res => {
                    console.log('user name update succcessfully ')
                }).catch(error => {
                   console.log(error)
                });
        }
    return (
        <div>
             {user.isLogin  ? <button onClick={handleLogOut}>Log out With Google  </button>: <button onClick={handleGoogleSignUP}>Login With Google </button> }
             <br />
            <button onClick={handleFacebookLogin}>Login With Facebook</button>
            <br />
            <button onClick={handleGitHubLogin}>Login With GitHub</button>
             <input onChange={() => setNewUser(!newUser) }  type='checkbox' name='newUser'></input>
             <label htmlFor='newUser'>New User Sign UP</label>
             <br />

            <form onSubmit={handleFormSubmit}>
                { newUser && <input onBlur={handleBlur}  name='name' type='text' placeholder='Enter Your Name'></input>}
                <br />
                <input onBlur={handleBlur} type='email' name='email' placeholder='Enter Your Email' required></input>
                <br />
                <input onBlur={handleBlur} type='password' name='password' placeholder='Enter Your Password' required></input>
                <br />
                <input type='submit' value={newUser ? 'Sign Up' : 'Log In'}></input>
            </form>
            <p> {user.name}</p>
            <p>{user.number}</p>
            <p style={{color:'red'}}>{user.error}</p>
            { user.success &&  <p style={{color:'green'}}>User {newUser? 'Created': 'Login'} Successfully</p>}
        </div>
    );
};

export default Authentication;
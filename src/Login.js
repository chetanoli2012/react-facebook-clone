import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import {auth, provider} from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {

    const [state, dispatch] = useStateValue();

    const signIn = () =>{
        // sign in logic 

        auth.signInWithPopup(provider).then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(user);
            
            dispatch({
                type: actionTypes.SET_USER,
                user
            })
            // ...
          }).catch((error) => {
            // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // The email of the user's account used.
            // var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            // var credential = error.credential;
            // ...
            console.log(error.message);
          });
    };
    return (
        <div className='login'>
            <div className='login__logo'>
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'
                    alt='' />
                <img className ='facebook__text'
                    src = 'https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg'
                    alt='' />
            </div>

            <Button type='submit' onClick={signIn}>
                Sign In
            </Button>
        </div>

    )
}

export default Login

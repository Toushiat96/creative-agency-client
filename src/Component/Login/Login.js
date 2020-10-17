import React, { useContext } from 'react';

import * as firebase from "firebase/app";
import "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import {Link, useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebase.config';


import logo from '../../images/logos/logo.png'
import { UserContext } from '../../App';



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);  
    }
const handleGoogleSignIn  = () => {

    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { isSignedIn: 'true', name: displayName, email: email } 
        setLoggedInUser(signedInUser);
        history.replace(from);
        console.log(signedInUser);

    }).catch(function (error) {

        const errorMessage = error.message;

        const email = error.email;
        console.log(errorMessage, email);

    });
}
    return (
        <div className="container">
            <div className="text-center mt-5">
                <Link to="/home" href="#">
                    <img src={logo} className="img-fluid w-25" alt="" />
                </Link>
            </div>
            <div className="text-center login-box">
                <div className="mt-5">
                    <h3>Login With</h3>
                    <button onClick={handleGoogleSignIn} className="google-sign-in-btn"> <FontAwesomeIcon className="google-icon" icon={faGoogle} /> Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
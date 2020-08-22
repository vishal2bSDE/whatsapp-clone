import React from 'react'
import "./Login.css";
import {Button } from "@material-ui/core";
import {auth, provider} from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {

    const [{}, dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider).then(result =>
            {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            }
            ).catch(error => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login_container">
            <img src="https://img.icons8.com/color/480/000000/whatsapp.png" alt="sorry"/>
                <div className="login_text">
                    <h1>Sign in to whatsapp-clone</h1>
                </div>
                <Button onClick={signIn}>
                    Sign In with google
                </Button>
            </div>
        </div>
    )
}
export default Login

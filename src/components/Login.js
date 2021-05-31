import React, {useState} from 'react'
import LoginForm from './LoginForm';

function Login(){
    return(
        <>
        <h2>Log In</h2>
       <LoginForm/>
        <p>
            Please log in to use this application. If you do not have log in credentials please contact your Facilities Manager.
        </p>
        </>
    );
    
}


export default Login
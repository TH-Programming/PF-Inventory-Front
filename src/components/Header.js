//! Header contains: Logo, Login(logicly), NavBar, 

import React from 'react'
import Logo from './Logo'
import LoginForm from './LoginForm'

export default function Header(props){


    if (props.isLoggedIn){
    return(
        <div className="header">
            <Logo/>
            <h1> Mi PF Inventory</h1>
        </div>
    )
    } else {
        return(
            <div className="header">
            <Logo/>
            <h1> Mi PF Inventory</h1>
            <LoginForm/>
        </div>
        )
    }
}
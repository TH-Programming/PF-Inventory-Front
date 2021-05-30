//! Header contains: Logo, Login(logicly), NavBar, 

import React from 'react'
import Logo from './Logo'
import Login from './Login'

export default function Header(props){
    return(
        <div className="header">
            <Logo/>
            <h1> Mi PF Inventory</h1>
            <Login/>
        </div>
    )
}
import React from 'react'
import {Link} from 'react-router-dom'
import TestButton from './TestButton'
//import Button from './NavButton'

export default function NavBar(props){
    console.log(props.currentUser)

    if(props.currentUser) { 
    return(
        <div className = "navbar">
            <Link to="/">Home</Link>
            <Link to="/clubs"> My Clubs </Link>
            <Link to="/my-region"> My Region </Link>
            <Link to={`/users/${props.currentUser.id}`}>My Profile</Link>
            <Link to="/search">Search</Link>
            {props.currentUser.is_admin ?
            <Link to="/admin">ADMIN</Link> : null}

            <p> placeholder </p>
            <p> placeholder </p>
            
            <TestButton setUser = {props.setUser}/>
        </div>
        )
    } else {
    return(
        <div className="navbar">
            <p>Please</p>
            <p>Log</p>
            <p>In</p>
            <p>To</p>
            <p>Continue</p>
        </div>
    )
    }
}

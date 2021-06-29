import React from 'react'
import {Link} from 'react-router-dom'
import TestButton from './TestButton'
//import Button from './NavButton'

export default function NavBar(props){
    if (props.isLoggedIn){
    return(
        <div className = "navbar">
            <Link to="/">Home</Link>
            <Link to="/clubs">My Clubs</Link>
            <Link to={`/users/${props.currentUser.id}`}>My Profile</Link>
            <Link to="/search">Search</Link>
            <p> placeholder </p>
            <p> placeholder </p>
            <TestButton/>
        </div>
        )
    } else {
        return(
            null
        )
    }
}

import React from 'react';
import Header from './Header';
import Footer from "./Footer";
import NavBar from './NavBar';

const Layout = (props) => {
    //! test variables
const val = true
const currentUser = {
    "id": 1,
    "userName": "Tyler",
    "role": "Tech"
}

    return (
        <>
          <Header/>
          <div className = "page-container">
            <NavBar isLoggedIn = {val} currentUser={currentUser}/>
            <div className = "container">
            {props.children}
            </div>
          </div>
          <Footer/>  
        </>
    );
}

export default Layout;

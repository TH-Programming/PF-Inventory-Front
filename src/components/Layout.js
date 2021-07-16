import React from 'react';
import Header from './Header';
import Footer from "./Footer";
import NavBar from './NavBar';

const Layout = (props) => {

    return (
        <>
          <Header currentUser = {props.currentUser} setUser = {props.setUser}/>
          <div className = "page-container">
            <NavBar currentUser = {props.currentUser} setUser = {props.setUser}/>
            <div className = "container">
            {props.children}
            </div>
          </div>
          <Footer/>  
        </>
    );
}

export default Layout;

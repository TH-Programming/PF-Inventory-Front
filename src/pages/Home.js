import React from 'react';

const Home = (props) => {
    return (
        <div className="container">
        { props.currentUser ?
        <p> Welcome to Impact Inventory, {props.currentUser.name}. </p>
         :
        <p> Please log in to use this application. If you do not have log in credentials please contact your Facility Manager or IT Admin.</p>
        }
        </div>
    );
}

export default Home;

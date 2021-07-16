import React from 'react';

const Profile = (props) => {
    return (
        <div className="container">
            {props.user}
        </div>
    );
}

export default Profile;

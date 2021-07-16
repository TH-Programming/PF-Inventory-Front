import React from 'react';
import {Link} from 'react-router-dom'

const Club = ({club}) => {
    return (
        <div>
          <Link to={`/clubs/${club.id}`}>{club.name}</Link>
          <p>{club.address}</p>  
        </div>
    );
}

export default Club;

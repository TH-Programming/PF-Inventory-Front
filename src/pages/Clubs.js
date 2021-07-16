import { React, useState, useEffect } from 'react';
import Club from "../components/Club"


const Clubs = (props) => {
    const [clubs, setClubs] = useState([])

    useEffect(() => 
    fetch("http://localhost:3001/clubs")
         .then(response => response.json())
         .then(data => {
            console.log(data[0].name)
            return setClubs(data)}),
            []   
        )

    return (
        clubs ?
        clubs.map((club)=> <Club club= { club } key = {club.id}/>) :
        <p> No Clubs </p>
    );
}

export default Clubs;

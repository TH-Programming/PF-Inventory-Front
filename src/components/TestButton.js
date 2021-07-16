import React from 'react';

const TestButton = (props) => {

    function executeTest(e) {
        e.preventDefault()
        fetch("http://localhost:3001/users/sign_out", {
            method: "DELETE",
            headers: {
                "Authorization": localStorage.authorization,
                "Content-Type": "Application/json",
                "Accept": "Application/json"
            }
        })
        .then(resp => resp.json())
        .then(props.setUser(null))
    }


    return (
        <>
            <button onClick = {executeTest}> TEST </button>
        </>
    );
}

export default TestButton;

import { React, useState } from 'react';

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:3001/users/sign_in", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Include': 'headers'
            },
            body: JSON.stringify({
                'user': {
                'email': `${email}`,
                'password': `${password}`
                }
            })
        })
        .then(response => {
            localStorage.setItem("authorization", response.headers.get("Authorization"))
            return response.json()
        })
        .then(data => console.log(data))
    }

    return (
            <form className="login-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" value={email} onChange = {(e) => setEmail(e.target.value)}/><br/>
            <input type="password" placeholder="Password" value={password} onChange = {(e) => setPassword(e.target.value)}/><br/>
            <input type="submit" value="LogIn"/>
        </form>
    );
}

export default LoginForm;

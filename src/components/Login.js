import React, {useState} from 'react'

function Login(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username);
        console.log(password);
    }

    return(
        <form className="login-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" value={username} onChange = {(e) => setUsername(e.target.value)}/><br/>
            <input type="password" placeholder="Password" value={password} onChange = {(e) => setPassword(e.target.value)}/><br/>
            <input type="submit" value="LogIn"/>
        </form>
    );
    
}


export default Login
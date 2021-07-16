import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { useState, useLayoutEffect } from 'react';
import Home from './pages/Home';
import Layout from './components/Layout'
import Profile from './components/Profile'
import Clubs from './pages/Clubs';
import Admin from './pages/Admin';

function App() {
  const [currentUser, setUser] = useState(null)
  
  useLayoutEffect(() => {
    if (localStorage.authorization) {
      fetch("http://localhost:3001/verify", {
            method: "POST",
            headers: {
                "Authorization": localStorage.authorization,
                "Content-Type": "Application/json",
                "Accept": "Application/json"
            }
        }, [])
        .then(resp => resp.json())
        .then(data => setUser(data))
    }
    }, []);

  return (
    <div>
      <Router>
        <Layout currentUser = {currentUser} setUser= {setUser}>
          <Route exact path = "/" render= {() => (
            <Home currentUser = {currentUser}/>)}/>
          <Route path = "/users/:id" component = {Profile}/>
          <Route path = "/clubs" component = {Clubs}/>
          <Route path = "/admin" component = {Admin}/>
        </Layout>
      </Router>
    </div>
  )
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Login from './components/Login' ;
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <NavBar/>
          <Route exact path = "/" component = {Home}/>
          <Route path = "/login" component = {Login}/>
        <Footer/>
      </Router>
    </div>
  )
}

export default App;

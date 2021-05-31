import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login' ;
import Home from './components/Home';
import Layout from './components/Layout'

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Route exact path = "/" component = {Home}/>
          <Route path = "/login" component = {Login}/>
        </Layout>
      </Router>
    </div>
  )
}

export default App;

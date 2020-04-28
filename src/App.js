import React,{Fragment,useState} from 'react';
import Navbar from '../src/components/layouts/Navbar'
import Users from '../src/components/users/Users'
import User from '../src/components/users/User'
import Search from '../src/components/users/Search'

import './App.css';
import axios from 'axios'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import About from '../src/components/pages/About'
import GithubState from "./context/github/GithubState";
const App =()=> {
 
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [user, setUser] = useState({});


  

  const getUser = async (text) => {
    
    setLoading(true)

    const data = await axios.get(`https://api.github.com/users/${text}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
    
    setUser(data.data)
    setLoading(false)

  }

  
 
    
    return (
      <GithubState>
        <Router>
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exact path="/" render={props=>(
              <Fragment>
                <Search/>
             <Users/>

              </Fragment>

            )}/>
            <Route exact path="/about" component={About}/>

           
            <Route path="/user/:login"  render={props => (
              <User {...props}  getUser={getUser} user={user}/>
            )} />
          </Switch>

        </div>

        </Router>
      </GithubState>
      
    )

 
}

export default App;

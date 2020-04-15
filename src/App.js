import React,{Component,Fragment} from 'react';
import Navbar from '../src/components/layouts/Navbar'
import User from '../src/components/users/Users'
import Search from '../src/components/users/Search'
import './App.css';
import axios from 'axios'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import About from '../src/components/pages/About'
class App extends Component {
  state = {
    users:[],
    isLoading:false
  }
  async componentDidMount(){
    this.setState({isLoading:true})
    const data = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
    this.setState({users:data.data})
    this.setState({isLoading:false})

  }

  searchUser = async(text)=> {
    this.setState({isLoading:true})
    const data = await axios.get(`https://api.github.com/search/users?q=${text.text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
    this.setState({users:data.data.items})
    this.setState({isLoading:false})
  }

  clearUser = ()=> this.setState({users:[],loading:false})
  render(){
    
    return (
      
        <Router>
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exact path="/" render={props=>(
              <Fragment>
                <Search searchUser={this.searchUser} clearUser={this.clearUser} showClear={this.state.users.length>0?true:false} />
             <User  users={this.state.users} isLoading={this.state.isLoading} />

              </Fragment>

            )}></Route>
            <Route exact path="/about" component={About}>

            </Route>
          </Switch>

        </div>

        </Router>
      
    )

  }
}

export default App;

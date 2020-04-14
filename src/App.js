import React,{Component,Fragment} from 'react';
import Navbar from '../src/components/layouts/Navbar'
import User from '../src/components/users/Users'
import './App.css';
import axios from 'axios'
class App extends Component {
  state = {
    users:[]
  }
  async componentDidMount(){
    const data = await axios.get(`https://api.github.com/users`)
    this.setState({users:data.data})
  }
  render(){
    
    return (
      <Fragment>
        <Navbar/>
        <div className="container">
       <User  users={this.state.users} />

        </div>
      </Fragment>
    )

  }
}

export default App;

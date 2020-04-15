import React, { Component } from 'react'

export default class Search extends Component {
    state = {
        text:''
    }

    onChange=(e) =>this.setState({text:e.target.value});
    onSubmit=(e) =>{
        e.preventDefault();
        this.props.searchUser({text:this.state.text});
        this.setState({text:''})
    }
    clearUser = ()=> {this.props.clearUser(); this.setState({text:''})}

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input 
                    type="text"
                    name="text"
                    placeholder="Search users"
                    value={this.state.text}
                    onChange={this.onChange}
                    />
                    <input 
                    type="submit" 
                    value="Search" 
                    className="btn btn-dark btn-block"/>

                </form>
                {this.props.showClear && <button 
                type="button" 
                className="btn btn-light btn-block"
                onClick={this.clearUser}
                >Clear</button>}
                
            </div>
        )
    }
}

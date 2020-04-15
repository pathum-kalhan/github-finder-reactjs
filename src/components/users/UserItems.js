import React from 'react'

 const UserItems= ({user:{avatar_url,login,html_url}})=> {
    
    
        return (
            <div className="card text-center">
                <img src={avatar_url} className="round-img" alt="Profile" style={{width:'60px'}}/>
                
            <h3>{login}</h3>
            <a className="btn btn-dark btn-sm my-1" href={html_url}>More</a>
            </div>
        )
    
}
export default UserItems

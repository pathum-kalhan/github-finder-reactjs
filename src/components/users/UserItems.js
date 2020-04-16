import React from 'react'
import {Link} from 'react-router-dom'
 const UserItems= ({user:{avatar_url,login,html_url}})=> {
    
    
        return (
            <div className="card text-center">
                <img src={avatar_url} className="round-img" alt="Profile" style={{width:'60px'}}/>
                
            <h3>{login}</h3>
            <Link className="btn btn-dark btn-sm my-1" to={`user/${login}`}>More</Link>
            </div>
        )
    
}
export default UserItems

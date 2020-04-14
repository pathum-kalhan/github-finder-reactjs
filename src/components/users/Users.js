import React from 'react'
import UserItems from './UserItems'
const Users = (props)=> {
    
        const userStyle = {
            display:'grid',
            gridTemplateColumns:'repeat(3,1fr)',
            gridGap:'1rem'
        }
       
        return (
            <div style={userStyle}>
                {props.users.map(user=>(
                    <UserItems user={user} key={user.id}/>

                )
                ) }
                
            </div>
        )
    
    
}

export default Users

import React,{useContext} from 'react'
import UserItems from './UserItems'
import Spinner from '../layouts/Spinner'
import GithubContext from '../../context/github/githubContext'

const Users = ()=> {
    const githubContext = useContext(GithubContext)
        const userStyle = {
            display:'grid',
            gridTemplateColumns:'repeat(3,1fr)',
            gridGap:'1rem'
    }
    
    const { isLoading, users } = githubContext;

        if (isLoading) {
            return <Spinner/>
        } else {
            return (
                <div style={userStyle}>
                    {users.map(user=>(
                        <UserItems user={user} key={user.id}/>
    
                    )
                    ) }
                    
                </div>
            )
            
        }
       
    
    
}

export default Users

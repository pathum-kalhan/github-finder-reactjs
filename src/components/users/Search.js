import React,{useState,useContext} from 'react'
import GithubContext from '../../context/github/githubContext'
const Search = ({ clearUser, showClear, searchUser }) => {
    const githubContext = useContext(GithubContext)
    const [text,setText] = useState('')

    const onChange = (e) => setText(e.target.value);
    const onSubmit = (e) => {
        
        e.preventDefault();
        githubContext.searchUser(text);
        setText('')
    }
    
    
        return (
            <div>
                <form className="form" onSubmit={onSubmit}>
                    <input 
                    type="text"
                    name="text"
                    placeholder="Search users"
                    value={text}
                    onChange={onChange}
                    />
                    <input 
                    type="submit" 
                    value="Search" 
                    className="btn btn-dark btn-block"/>

                </form>
                {githubContext.users.length > 0 && <button 
                type="button" 
                className="btn btn-light btn-block"
                    onClick={githubContext.clearUser}
                >Clear</button>}
                
            </div>
        )
    
}
export default  Search
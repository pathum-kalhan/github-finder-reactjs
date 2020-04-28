import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext'
import GithubReducer from './GithubReducer'

import { SEARCH_USER, SET_LOADING, CLEAR_USER} from '../types';

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading:false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    // clear users
    const clearUser = () => dispatch({type:CLEAR_USER})

    // search user
    const searchUser = async (text) => {
        setLoading(true)
        const data = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)

        dispatch({
            type: SEARCH_USER,
            payload: data.data.items
        })

    }

    //set loading
    const setLoading = ()=> dispatch({type:SET_LOADING})
    return <GithubContext.Provider value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUser,
        clearUser
    }}>
        {props.children}
    </GithubContext.Provider>
}

export default GithubState;

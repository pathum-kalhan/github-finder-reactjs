import React, { Component,Fragment } from 'react'
import {Link} from 'react-router-dom'
export default class User extends Component {
    componentDidMount() {
       
        this.props.getUser(this.props.match.params.login)
    }
    render() {
        const { hireable,
            avatar_url,
            name,
            location,
            bio,
            html_url,
            login,
            company,
            blog,
            followers,
            following,
            public_repos,
            public_gists
        } = this.props.user
        return (
            <Fragment>
                <Link to="/" className="btn btn-light">Back to Search</Link>
                {hireable ? 'Hireable' : 'Not hireable'}
                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} alt="" className="round-img" style={{ width: '150px' }} />
                        <h1>{name}</h1>
                        <p>Location : {location}</p>
                    </div>
                    <div>
                        {bio && (
                            <Fragment>
                                <h3>Bio</h3>
                                <p>{{bio}}</p>
                            </Fragment>
                        )}
                        <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>
                        <ul>
                            <li>
                                {login && <Fragment>
                                    <strong>Username</strong> : {login}
                                </Fragment>}
                            </li>
                            <li>
                                {company && <Fragment>
                                    <strong>Company</strong> : {company}
                                </Fragment>}
                            </li>
                            <li>
                                {blog && <Fragment>
                                    <strong>Website</strong> : {blog}
                                </Fragment>}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card text-center">
                    
                    <div className="badge badge-primary">Followers : {followers}</div>
                    <div className="badge badge-success">Following : {following}</div>
                    <div className="badge badge-light">Public repos : {public_repos}</div>
                    <div className="badge badge-dark">Public gists : {public_gists}</div>

                    
                </div>
            </Fragment>
        )
    }
}

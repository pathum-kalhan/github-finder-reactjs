import React from 'react'
import PropTypes from 'prop-types';
const Navbar = (props)=>{
        return (
            <nav className="navbar bg-primary">
                <h1>{props.title}</h1>
            </nav>
        )
}
Navbar.propsTypes = {
    title:PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title:'Github Finder'
}

export default Navbar

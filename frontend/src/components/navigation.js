import React from 'react'
import { NavLink } from 'react-router-dom'
import '../MainLayout.css'
import { connect } from "react-redux"

const Navigation = (props) => {
    if (props.isLoading) {
        return "Loading"
    }
    if (props.token && props.user) {
        return <span>
            Hello {props.user}
            <NavLink to="/logout">Logout</NavLink>
        </span>
    }
    return [<NavLink key="1" to="/login">Login</NavLink>, <NavLink key="2" to="/register">Register</NavLink>]
}

const mapStateToProps = state => {
    return {
        token: state.authentification.token,
        user: state.authentification.user,
        isLoading: state.authentification.isLoading
    }
}

export default connect(mapStateToProps)(Navigation)
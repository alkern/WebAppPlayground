import React from 'react'
import { NavLink } from 'react-router-dom'
import './navigation.css'
import { connect } from 'react-redux'
import showLoading from './showLoading'
import PropTypes from 'prop-types'

const Navigation = (props) => {
    if (props.token && props.user) {
        return <span>
            Hello {props.user}
            <NavLink to="/logout">Logout</NavLink>
        </span>
    }
    return [<NavLink key="1" to="/login">Login</NavLink>, <NavLink key="2" to="/register">Register</NavLink>]
}
Navigation.propTypes = {
    token: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
}

const mapStateToProps = state => {
    return {
        token: state.authentification.token,
        user: state.authentification.user
    }
}

export default showLoading(connect(mapStateToProps)(Navigation))
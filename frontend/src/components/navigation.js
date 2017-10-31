import React from 'react'
import { NavLink } from 'react-router-dom'
import './navigation.css'
import { connect } from 'react-redux'
import showLoading from './showLoading'
import PropTypes from 'prop-types'

const Navigation = (props) => {
    if (props.token && props.user) {
        return <ul className="nav nav-tabs">
            <li role="presentation"><NavLink to="/profile">Hello {props.user.username}</NavLink></li>
            <li role="presentation"><NavLink to="/logout">Logout</NavLink></li>
        </ul>
    }
    return <ul className="nav nav-tabs">
        <li role="presentation"><NavLink key="1" to="/login">Login</NavLink></li>
        <li role="presentation"><NavLink key="2" to="/register">Register</NavLink></li>
    </ul>
}
Navigation.propTypes = {
    token: PropTypes.string,
    user: PropTypes.shape({
        username: PropTypes.string,
        email: PropTypes.string,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        pk: PropTypes.number
    })
}

const mapStateToProps = state => {
    return {
        token: state.authentification.token,
        user: state.authentification.user
    }
}

export default showLoading(connect(mapStateToProps)(Navigation))
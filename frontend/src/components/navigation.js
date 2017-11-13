import React from 'react'
import { NavLink } from 'react-router-dom'
import './navigation.css'
import { connect } from 'react-redux'
import { showLoading } from '.'
import PropTypes from 'prop-types'

const Navigation = (props) => {
    if (props.user) {
        return <ul className='nav nav-tabs'>
            <li role='presentation'><NavLink to='/profile'>Hello {props.user.username}</NavLink></li>
            <li role='presentation'><NavLink to='/logout'>Logout</NavLink></li>
        </ul>
    }
    return <ul className='nav nav-tabs'>
        <li role='presentation'><NavLink key='1' to='/login'>Login</NavLink></li>
        <li role='presentation'><NavLink key='2' to='/register'>Register</NavLink></li>
    </ul>
}
Navigation.propTypes = {
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
        user: state.authentification.user
    }
}

export default showLoading(connect(mapStateToProps)(Navigation))
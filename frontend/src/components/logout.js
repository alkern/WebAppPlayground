import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { logout } from '../actions'
import PropTypes from 'prop-types'

class Logout extends React.Component {
    componentWillMount() {
        this.props.dispatch(logout())        
    }

    render() {
        return <Redirect push to="/home" />
    }
}
Logout.propTypes = {
    dispatch: PropTypes.func.isRequired
}

export default connect()(Logout)
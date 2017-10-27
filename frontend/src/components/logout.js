import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { logout } from '../actions'

class Logout extends React.Component {
    componentWillMount() {
        this.props.dispatch(logout())        
    }

    render() {
        return <Redirect push to="/home" />
    }
}

export default connect()(Logout)
import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

class RedirectWithAction extends React.Component {
    componentWillMount() {
        this.props.dispatch(this.props.action)        
    }

    render() {
        return <Redirect push to={this.props.to} />
    }
}
RedirectWithAction.propTypes = {
    to: PropTypes.string,
    action: PropTypes.object,
    dispatch: PropTypes.func.isRequired
}

export default connect()(RedirectWithAction)
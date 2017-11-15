import React from 'react'
import PropTypes from 'prop-types'
import { RedirectWithAction } from '.'
import { reportError } from '../actions'

class ErrorView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shouldReturn: false
        }
        this.returnFromError = this.returnFromError.bind(this)
    }

    returnFromError() {
        this.setState({
            shouldReturn: true
        })
    }

    render() {
        if (this.state.shouldReturn)
            return <RedirectWithAction action={reportError(null)} />
        return (
            <div>
                <div className="alert alert-danger" role="alert">
                    {this.props.error}
                </div>
                <button className="btn btn-default" onClick={this.returnFromError}>
          Return
                </button>
            </div>
        )
    }
}
ErrorView.propTypes = {
    error: PropTypes.string
}

export default ErrorView

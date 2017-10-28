import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../actions'
import PropTypes from 'prop-types'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            redirect: false,
        }
        this.updateName = this.updateName.bind(this)
        this.updatePassword = this.updatePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    updateName(event) {
        this.setState({
            username: event.target.value,
        })
    }

    updatePassword(event) {
        this.setState({
            password: event.target.value,
        })
    }
    
    onSubmit(event) {
        this.props.login(this.state.username, this.state.password)
        this.setState({
            redirect: true,
        })
        event.preventDefault() //https://stackoverflow.com/questions/45024214/console-error-form-submission-canceled-because-the-form-is-not-connected
    }

    render() {
        if (this.state.redirect) return <Redirect push to="/home" />
        return <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label htmlFor="register_name">User Name:</label>
                <input type="text" className="form-control" id="register_name" onChange={this.updateName} />
            </div>
            <div className="form-group">
                <label htmlFor="register_pass">Password:</label>
                <input type="password" className="form-control" id="register_pass" onChange={this.updatePassword} />
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
        </form>
    }
}
LoginForm.propTypes = {
    login: PropTypes.func.isRequired
}

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => {
            dispatch(login(username, password))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
import React from 'react'
import BackendClient from '../backend'
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux"
import { registerToken } from "../actions"

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.backend = new BackendClient()
        this.state = {
            username: "",
            password: "",
            redirect: false,
        }
    }
    
    updateName = (event) => {
        this.setState({
            username: event.target.value,
        })
    }

    updatePassword = (event) => {
        this.setState({
            password: event.target.value,
        })
    }
    
    onSubmit = (event) => {
        let loginData = {
            username: this.state.username,
            password: this.state.password,
        }
        this.backend.login(loginData, this.handleRegistrationSuccess, this.handleRegistrationError)
        this.setState({
            redirect: true,
        })
        event.preventDefault(); //https://stackoverflow.com/questions/45024214/console-error-form-submission-canceled-because-the-form-is-not-connected
    }
    
    handleRegistrationSuccess = (data) => {
        this.props.doRegisterToken(data.key)
    }

    handleRegistrationError = (data) => {
        console.log(data)
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

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        doRegisterToken: token => {
            dispatch(registerToken(token))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
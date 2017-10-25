import React from 'react'
import Backend from '../backend'
import { Redirect } from 'react-router-dom'

class RegisterForm extends React.Component {
    constructor() {
        super();
        this.backend = new Backend()
        this.state = {
            username: "",
            password: "",
            isValidPassword: false,
            email: "",
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
            isValidPassword: this.state.password.length >= 8,
        })
    }

    updateMail = (event) => {
        this.setState({
            email: event.target.value,
        })
    }

    onSubmit = (event) => {
        let registrationData = {
            username: this.state.username,
            password1: this.state.password,
            password2: this.state.password,
            email: this.state.email,
        }
        this.backend.register(registrationData, this.handleRegistrationSuccess, this.handleRegistrationError)
        this.setState({
            redirect: true,
        })
        event.preventDefault(); //https://stackoverflow.com/questions/45024214/console-error-form-submission-canceled-because-the-form-is-not-connected
    }

    handleRegistrationSuccess = (data) => {
        console.log("SUCCESS")
    }

    handleRegistrationError = (data) => {
        console.log("ERROR")
    }

    render() {
        if (this.state.redirect) return <Redirect to="/home" />
        return <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label htmlFor="register_name">User Name:</label>
                <input type="text" className="form-control" id="register_name" onChange={this.updateName} />
            </div>
            <div className={this.state.isValidPassword ? "form-group" : "form-group has-error"}>
                <label htmlFor="register_pass">Password:</label>
                <input type="password" className="form-control" id="register_pass" onChange={this.updatePassword} />
            </div>
            <div className="form-group">
                <label htmlFor="register_mail">E-Mail:</label>
                <input type="email" className="form-control" id="register_mail" onChange={this.updateMail} />
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
        </form>
    }
}

export default RegisterForm
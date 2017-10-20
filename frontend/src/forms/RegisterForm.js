import React from 'react'
import Backend from '../backend'
import { Redirect } from 'react-router-dom'

class RegisterForm extends React.Component {
    constructor() {
        super();
        this.backend = new Backend()
        this.state = {
            name: "",
            password: "",
            mail: "",
            redirect: false,
        }
    }

    updateName = (event) => {
        this.setState({
            name: event.target.value,
        })
    }

    updatePassword = (event) => {
        this.setState({
            password: event.target.value,
        })
    }

    updateMail = (event) => {
        this.setState({
            mail: event.target.value,
        })
    }

    onSubmit = (event) => {
        this.backend.register(this.state, this.handleRegistration)
        this.setState({
            redirect: true,
        })
        event.preventDefault(); //https://stackoverflow.com/questions/45024214/console-error-form-submission-canceled-because-the-form-is-not-connected
    }

    handleRegistration = (data) => {
        console.log(data)
    }

    render() {
        if (this.state.redirect) return <Redirect to="/home" />
        return <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label htmlFor="register_name">User Name:</label>
                <input type="text" className="form-control" id="register_name" onChange={this.updateName} />
            </div>
            <div className="form-group">
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
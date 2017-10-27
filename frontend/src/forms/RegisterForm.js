import React from 'react'
import { Redirect } from 'react-router-dom'
import { register } from "../actions"
import { connect } from "react-redux"

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
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
            isValidPassword: this.state.password.length >= 7,
        })
    }

    updateMail = (event) => {
        this.setState({
            email: event.target.value,
        })
    }

    onSubmit = (event) => {
        this.props.doRegister(this.state.username, this.state.password, this.state.email)
        this.setState({
            redirect: true,
        })
        event.preventDefault(); //https://stackoverflow.com/questions/45024214/console-error-form-submission-canceled-because-the-form-is-not-connected
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

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        doRegister: (username, password, email) => {
            dispatch(register(username, password, email))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
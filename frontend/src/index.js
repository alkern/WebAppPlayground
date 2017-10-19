import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout'

const Login = () => {
    return <h1>Login</h1>
}

const Register = () => {
    return <h1>Register</h1>
}

ReactDOM.render(
    <BrowserRouter>
        <div className="container">
            <Route component={MainLayout} />
            <Route path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </div>
    </BrowserRouter>, 
    document.getElementById('root')
)
registerServiceWorker()

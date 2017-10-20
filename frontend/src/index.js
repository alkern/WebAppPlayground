import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout'
import RegisterForm from './forms/RegisterForm'

const Login = () => {
    return <h1>Login</h1>
}

ReactDOM.render(
    <BrowserRouter>
        <div className="container">
            <Route path="/" component={MainLayout} />
            <Route path="/home" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={RegisterForm} />
        </div>
    </BrowserRouter>, 
    document.getElementById('root')
)
registerServiceWorker()

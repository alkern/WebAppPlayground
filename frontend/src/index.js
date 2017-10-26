import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout'
import RegisterForm from './forms/RegisterForm'
import LoginForm from './forms/LoginForm'

ReactDOM.render(
    <BrowserRouter>
        <div className="container">
            <Route path="/" component={MainLayout} />
            <Route path="/home" component={App} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
        </div>
    </BrowserRouter>, 
    document.getElementById('root')
)
registerServiceWorker()

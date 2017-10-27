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
import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
import twitterReducer from "./reducers"
import { Provider } from "react-redux"
import LogoutPage from "./components/logout"
import "bootstrap/dist/css/bootstrap.css"

let store = createStore(twitterReducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div className="container">
                <Route path="/" component={MainLayout} />
                <Route path="/home" component={App} />
                <Route path="/login" component={LoginForm} />
                <Route path="/logout" component={LogoutPage} />
                <Route path="/register" component={RegisterForm} />
            </div>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
)
registerServiceWorker()

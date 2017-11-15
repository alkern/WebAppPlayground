import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import RegisterForm from './forms/RegisterForm'
import LoginForm from './forms/LoginForm'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import twitterReducer from './reducers'
import { Provider } from 'react-redux'
import { RedirectWithAction } from './components'
import Profile from './components/Profile'
import 'bootstrap/dist/css/bootstrap.css'
import sagas from './sagas'
import { logout } from './actions'

let sagaMiddleware = createSagaMiddleware()
let store = createStore(twitterReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(sagas)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div className='container'>
                <Route path='/' component={MainLayout} />
                <Route path='/home' component={App} />
                <Route path='/login' component={LoginForm} />
                <Route path='/logout' render={() =><RedirectWithAction to={'/home'} action={logout()} />} />
                <Route path='/register' component={RegisterForm} />
                <Route path='/profile' component={Profile} />
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker()

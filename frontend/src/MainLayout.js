import React from 'react'
import { Link } from 'react-router-dom'
import './MainLayout.css'

class MainLayout extends React.Component {
    render() {
        return <span>
            <Link to="/home">
                <h1>Twitter Clone</h1>
            </Link>
            <Navigation />
        </span>
    }
}

class Navigation extends React.Component {
    render() {
        let links = [<Link key="1" to="login">Login</Link>, <Link key="2" to="/register">Register</Link>]
        return links
    }
}

export default MainLayout
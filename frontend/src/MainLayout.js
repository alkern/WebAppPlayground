import React from 'react'
import { NavLink } from 'react-router-dom'
import './MainLayout.css'
import Navigation from "./components/navigation"

class MainLayout extends React.Component {
    render() {
        return <span>
            <NavLink to="/home">
                <h1>Twitter Clone</h1>
            </NavLink>
            <Navigation />
        </span>
    }
}

export default MainLayout
import React from 'react'
import { TweetListContainer } from '../containers'
import { connect } from 'react-redux'
import TweetInput from './TweetInput'
import PropTypes from 'prop-types'

const App = props => {
    if (props.isLoggedIn) var input = <TweetInput /> 
    return (
        <div className='container'>
            {input}
            <TweetListContainer />
        </div>
    )
}
App.propTypes = {
    isLoggedIn: PropTypes.bool,
    redirect: PropTypes.string
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.authentification.user != null
    }
}

export default connect(mapStateToProps)(App)

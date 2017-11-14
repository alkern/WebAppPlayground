import React from 'react'
import { TweetListContainer } from '../containers'
import { connect } from 'react-redux'
import TweetInput from './TweetInput'
import PropTypes from 'prop-types'
import { ErrorView } from '.'

const App = props => {
    if (props.error) return <ErrorView error={props.error} />
    if (props.isLoggedIn) var input = <TweetInput /> 
    return (
        <div className='container'>
            {input}
            <TweetListContainer />
        </div>
    )
}
App.propTypes = {
    error: PropTypes.string,
    isLoggedIn: PropTypes.bool,
    redirect: PropTypes.string
}

const mapStateToProps = state => {
    return {
        error: state.authentification.error,
        isLoggedIn: state.authentification.user != null
    }
}

export default connect(mapStateToProps)(App)

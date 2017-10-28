import React, { Component } from 'react'
import TweetList from './tweetlist'
import { connect } from 'react-redux'
import TweetInput from './tweetInput'
import PropTypes from 'prop-types'

class App extends Component {
    render() {
        if (this.props.isLoggedIn) var input = <TweetInput /> 
        return (
            <div className="container">
                {input}
                <TweetList />
            </div>
        )
    }
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

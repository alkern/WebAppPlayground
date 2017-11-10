import React, { Component } from 'react'
import { fetchTweets } from '../actions'
import { connect } from 'react-redux'
import { showLoading } from '../components'
import PropTypes from 'prop-types'
import { TweetList } from '../components'

class TweetListContainer extends Component {
    componentWillMount() {
        if (this.props.shouldFetch)
            this.props.dispatch(fetchTweets(this.props.userPk))
    }

    componentDidUpdate() {
        if (this.props.shouldFetch)
            this.props.dispatch(fetchTweets(this.props.userPk))
    }

    render() {
        return <TweetList tweets={this.props.tweets} />
    }
}
TweetListContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    tweets: PropTypes.array.isRequired,
    shouldFetch: PropTypes.bool.isRequired,
    userPk: PropTypes.number
}

const mapStateToProps = state => {
    return {
        tweets: state.tweets.tweets,
        shouldFetch: state.tweets.shouldFetch,
        userPk: state.authentification.user ? state.authentification.user.pk : 0
    }
}

export default showLoading(connect(mapStateToProps)(TweetListContainer))
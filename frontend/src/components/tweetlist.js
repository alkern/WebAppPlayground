import React, { Component } from 'react'
import { fetchTweets } from '../actions'
import { connect } from 'react-redux'
import showLoading from '../components/showLoading'
import PropTypes from 'prop-types'

class TweetList extends Component {
    componentWillMount() {
        if (this.props.shouldFetch)
            this.props.dispatch(fetchTweets(this.props.userPk))
    }

    componentDidUpdate() {
        if (this.props.shouldFetch)
            this.props.dispatch(fetchTweets(this.props.userPk))
    }

    render() {
        let items = this.props.tweets.map((tweet, counter) => {
            return <Tweet key={counter} tweet={tweet} />
        })
        return <div>{items}</div>
    }
}
TweetList.propTypes = {
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

class Tweet extends Component {
    render() {
        let name = this.props.tweet.user_name
        let date = new Date(this.props.tweet.date).toLocaleString()
        let text = this.props.tweet.text
        return <div className="well well-sm">{name} {date}<br/>{text}</div>
    }
}
Tweet.propTypes = {
    tweet: PropTypes.shape({
        user_name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
}

export default showLoading(connect(mapStateToProps)(TweetList))
import React, { Component } from 'react'
import { fetchTweets } from '../actions'
import { connect } from 'react-redux'
import showLoading from '../components/showLoading'
import PropTypes from 'prop-types'

class TweetList extends Component {
    componentWillMount() {
        this.props.dispatch(fetchTweets())
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
    tweets: PropTypes.array.isRequired
}

const mapStateToProps = state => {
    return {
        tweets: state.tweets
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
import React, { Component } from 'react'
import { fetchTweets } from "./actions"
import { connect } from "react-redux"

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

const mapStateToProps = state => {
    return {
        tweets: state.tweets
    }
}

class Tweet extends Component {
    render() {
        let name = this.props.tweet.user_name
        let text = this.props.tweet.text
        return <div className="well well-sm">{name}<br/>{text}</div>
    }
}

export default connect(mapStateToProps)(TweetList)
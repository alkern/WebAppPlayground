import React, { Component } from 'react'
import BackendClient from './backend'

class TweetList extends Component {
    constructor() {
        super()
        this.state = {
            tweets: [],
        }
        this.backend = new BackendClient()
    }

    componentDidMount() {
        this.backend.getTweets((data) => {
            this.setState({
                tweets: data
            })
        }, (error) => {
            console.log(error)
        }) 
    }

    render() {
        let items = this.state.tweets.map((tweet, counter) => {
            return <Tweet key={counter} tweet={tweet} />
        })
        return <div>{items}</div>
    }
}

class Tweet extends Component {
    render() {
        let name = this.props.tweet.user_name
        let id = this.props.tweet.id
        let title = name + ' with ID ' + id
        let text = this.props.tweet.text
        return <div>{title}<br/>{text}</div>
    }
}

export default TweetList
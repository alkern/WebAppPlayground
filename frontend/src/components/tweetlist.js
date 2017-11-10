import React from 'react'
import PropTypes from 'prop-types'
import { Tweet } from '.'

const TweetList = props => {
    let items = props.tweets.map((tweet, counter) => {
        return <Tweet key={counter} tweet={tweet} />
    })
    return <div>{items}</div>
}
TweetList.propTypes = {
    tweets: PropTypes.array.isRequired
}

export default TweetList
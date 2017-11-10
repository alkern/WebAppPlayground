import React from 'react'
import PropTypes from 'prop-types'

const Tweet = props => {
    let name = props.tweet.user_name
    let date = new Date(props.tweet.date).toLocaleString()
    let text = props.tweet.text
    return <div className='well well-sm'>{name} {date}<br/>{text}</div>
}
Tweet.propTypes = {
    tweet: PropTypes.shape({
        user_name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
}

export default Tweet
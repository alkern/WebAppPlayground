import React from 'react'
import { connect } from 'react-redux'
import { sendTweet } from '../actions'
import showLoading from '../components/showLoading'
import PropTypes from 'prop-types'

class TweetInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
        this.onUpdateText = this.onUpdateText.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onUpdateText(event) {
        this.setState({
            text: event.target.value
        })
    }

    onSubmit(event) {
        this.props.doSendTweet(this.state.text, this.props.user.pk, this.props.user.username)
        event.preventDefault()
    }

    render() {
        return <div className='jumbotron'>
            <form onSubmit={this.onSubmit}>
                <div className='form-group'>
                    <textarea className='form-control' onChange={this.onUpdateText} />
                </div>
                <button type='submit' className='btn btn-default'>Submit</button>
            </form>
        </div>
    }
}
TweetInput.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string,
        email: PropTypes.string,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        pk: PropTypes.number
    }),
    doSendTweet: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        user: state.authentification.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        doSendTweet: (text, user, username) => {
            dispatch(sendTweet(text, user, username, new Date(Date.now()).toISOString()))
        }
    }
}

export default showLoading(connect(mapStateToProps, mapDispatchToProps)(TweetInput))
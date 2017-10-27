import React from "react"
import { connect } from "react-redux"
import { sendTweet } from "../actions"

class TweetInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ""
        }
    }

    onUpdateText = event => {
        this.setState({
            text: event.target.value
        })
    }

    onSubmit = event => {
        this.props.doSendTweet(this.state.text, this.props.user)
        event.preventDefault()
    }

    render() {
        return <div className="jumbotron">
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <textarea className="form-control" onChange={this.onUpdateText} />
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        user: state.authentification.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        doSendTweet: (text, user) => {
            dispatch(sendTweet(text, user, new Date(Date.now()).toISOString()))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetInput)
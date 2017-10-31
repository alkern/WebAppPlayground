import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ProfileForm from '../forms/ProfileForm'

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.updateProfile = this.updateProfile.bind(this)
    }

    updateProfile(profileInfo) {
        //TODO
    }

    render() {
        if (this.props.user) {
            return (
                <div className="panel panel-default">
                    <div className="panel-heading">{this.props.user.username}</div>
                    <div className="panel-body">
                        <ProfileForm
                            user={this.props.user}
                            updateProfile={this.updateProfile}
                        />
                    </div>
                </div>
            )
        }
        return <div className="alert alert-danger">Not logged in</div>
    }
}
Profile.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string,
        email: PropTypes.string,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        pk: PropTypes.number
    })
}

const mapStateToProps = state => {
    return {
        user: state.authentification.user
    }
}

export default connect(mapStateToProps)(Profile)

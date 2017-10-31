import React from 'react'
import PropTypes from 'prop-types'

class ProfileForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: ''
        }
        this.updateEmail = this.updateEmail.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    updateEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault()
        this.props.updateProfile(this.state)
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className='form-group'>
                    <label htmlFor='profile_email'>Email:</label>
                    <input
                        type='email'
                        className='form-control'
                        id='profile_email'
                        onChange={this.updateEmail}
                        placeholder={this.props.user.email}
                    />
                </div>
                <button type='submit' className='btn btn-default'>
          Submit
                </button>
            </form>
        )
    }
}
ProfileForm.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string,
        email: PropTypes.string,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        pk: PropTypes.number
    }),
    updateProfile: PropTypes.func.isRequired
}

export default ProfileForm

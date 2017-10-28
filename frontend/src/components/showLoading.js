import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/**
 * Higher-Order-Component to wrap all Components which should show a Loading screen
 * e.g. for networking
 * @param {*} WrappedComponent 
 */
function showLoading(WrappedComponent) {

    class LoadingClass extends React.Component {
        render() {
            if (this.props.isLoading) return 'Loading'
            return <WrappedComponent {...this.props} />
        }
    }
    LoadingClass.propTypes = {
        isLoading: PropTypes.bool.isRequired
    }

    const mapStateToProps = state => {
        return {
            isLoading: state.tweets.isLoading
        }
    }

    return connect(mapStateToProps)(LoadingClass)
}

export default showLoading
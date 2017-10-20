import React, { Component } from 'react'
import BackendClient, { BackendMock } from './backend'

class UserList extends Component {
    constructor() {
        super()
        this.state = {
            users: [],
        }
        this.backend = new BackendClient()
    }

    componentDidMount() {
        this.backend.getUserList((data) => {
            this.setState({
                users: data
            })
        }) 
    }

    render() {
        let items = this.state.users.map((user, counter) => {
            return <User key={counter} user={user} />
        })
        return <div>{items}</div>
    }
}

class User extends Component {
    render() {
        let name = this.props.user.user_name
        let id = this.props.user.id
        return <div>{name + ' has ID ' + id}</div>
    }
}

export default UserList
import axios from 'axios'

class BackendClient {
    constructor() {
        this.urlUsers = "http://localhost:8000/users/"
    }

    getUserList(cb) {
        this.get(this.urlUsers, cb)
    }

    get(url, cb) {
        axios.get(url).then((response) => {
            cb(response.data)
        })
    }

    register(data, cb) {
        console.log(data)
        axios.post(this.urlUsers, data).then((response) => {
            cb(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export class BackendMock {
    getUserList(cb) {
        cb([{
            user_name: "Test",
            id: 15,
        },
        {
            user_name: "Test2",
            id: 16,                
        }])
    }
}

export default BackendClient
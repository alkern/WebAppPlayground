import axios from 'axios'

class BackendClient {
    constructor() {
        this.urlUsers = "http://localhost:8000/users/"
        this.urlRegistration = "http://localhost:8000/rest-auth/registration/"
    }

    getUserList(cb) {
        this.get(this.urlUsers, cb)
    }

    get(url, cb) {
        axios.get(url).then((response) => {
            cb(response.data)
        })
    }

    register(data, successCallback, errorCallback) {
        axios.post(this.urlRegistration, data).then((response) => {
            successCallback(response.data)
        })
        .catch((error) => {
            errorCallback(error)
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
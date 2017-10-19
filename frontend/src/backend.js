import axios from 'axios'

class BackendClient {
    getUserList(cb) {
        let URL = "http://localhost:8000/users/"
        this.get(URL, cb)
    }

    get(url, cb) {
        axios.get(url).then((response) => {
            cb(response.data)
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
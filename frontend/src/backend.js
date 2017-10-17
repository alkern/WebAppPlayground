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

export default BackendClient
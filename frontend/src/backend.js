import axios from 'axios'

class BackendClient {
    constructor() {
        this.urlRoot = "http://localhost:8000/"
        this.urlTweets = this.urlRoot + "tweets/"
        this.urlAuth = this.urlRoot + "rest-auth/"
        this.urlRegistration = this.urlAuth + "registration/"        
        this.urlLogin = this.urlAuth + "login/"
    }

    get(url, successCallback, errorCallback) {
        axios.get(url).then((response) => {
            successCallback(response.data)
        })
        .catch((error) => {
            errorCallback(error)
        })
    }
    
    post(url, data, successCallback, errorCallback) {
        axios.post(url, data).then((response) => {
            successCallback(response.data)
        })
        .catch((error) => {
            errorCallback(error)
        })
    }

    addToken(token) {
        axios.defaults.headers.post['Authorization'] = "Token " + token
    }

    getTweets(successCallback, errorCallback) {
        this.get(this.urlTweets, successCallback, errorCallback)
    }

    tweet(data, successCallback, errorCallback) {
        this.post(this.urlTweets, data, successCallback, errorCallback)
    }

    register(data, successCallback, errorCallback) {
        this.post(this.urlRegistration, data, successCallback, errorCallback)
    }

    login(data, successCallback, errorCallback) {
        this.post(this.urlLogin, data, successCallback, errorCallback)
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
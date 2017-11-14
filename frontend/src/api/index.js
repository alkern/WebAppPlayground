import axios from 'axios'

let urlRoot = ''
let urlApi = urlRoot + 'v1/'
let urlTweets = urlApi + 'tweet/'
let urlRichTweets = urlApi + 'rtweet/'
let urlAuth = urlRoot + 'rest-auth/'
let urlAuthUser = urlAuth + 'user/'
let urlRegistration = urlAuth + 'registration/'        
let urlLogin = urlAuth + 'login/'  
let urlLogout = urlAuth + 'logout/'

class Api {
    setToken(token) {
        axios.defaults.headers.common['Authorization'] = 'Token ' + token
    }

    resetToken() {
        axios.defaults.headers.common['Authorization'] = ''
    }

    getTweets(userPk) {
        return axios.get(urlRichTweets + '?pk=' + userPk)
            .then(response => response.data)
    }

    sendTweet(text, user, username, date) {
        return axios.post(urlTweets, {
            text: text,
            user: user,
            user_name: username,
            date: date
        })
    }

    register(username, password, email) {
        return axios.post(urlRegistration, {
            username: username,
            password1: password,
            password2: password,
            email: email
        })
            .then(response => response.data.key)
    }

    getAuthUser(username) {
        return axios.get(urlAuthUser, {
            user_name: username
        })
            .then(response => response.data)  
    }

    login(username, password) {
        return axios.post(urlLogin, {
            username: username, 
            password: password
        })
            .then(response => response.data.key)
    }

    logout() {
        return axios.post(urlLogout)
    }
}

export default Api
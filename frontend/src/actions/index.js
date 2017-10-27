import axios from "axios"

let urlRoot = "http://localhost:8000/"
let urlTweets = urlRoot + "tweets/"
let urlAuth = urlRoot + "rest-auth/"
let urlRegistration = urlAuth + "registration/"        
let urlLogin = urlAuth + "login/"

export const fetchTweets = () => {
    return dispatch => {
        return axios.get(urlTweets)
        .then(response => response.data)
        .then(json => dispatch(receiveTweets(json)))
    }
}

const receiveTweets = json => {
    return {
        type: "RECEIVE_TWEETS",
        tweets: json
    }
}

export const register = (username, password, email) => {
    return dispatch => {
        axios.post(urlRegistration, {
            username: username,
            password1: password,
            password2: password,
            email: email
        })
        .then(response => response.data)
        .then(token => dispatch(registerToken(token, username)))
    }
}

export const login = (username, password) => {
    return dispatch => {
        return axios.post(urlLogin, {
            username: username, 
            password: password
        })
        .then(response => response.data)
        .then(token => dispatch(registerToken(token, username)))
    }
}

const registerToken = (token, user) => {
    return {
        type: "REGISTER_TOKEN",
        token: token,
        user: user
    }
}

export const logout = () => {
    return {
        type: "LOGOUT"
    }
}

//addToken(token) {
//    axios.defaults.headers.post['Authorization'] = "Token " + token
//}
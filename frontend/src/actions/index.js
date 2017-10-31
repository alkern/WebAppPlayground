import axios from 'axios'

let urlRoot = 'http://localhost:8000/'
let urlApi = urlRoot + 'v1/'
let urlTweets = urlApi + 'tweet/'
let urlRichTweets = urlApi + 'rtweet/'
let urlAuth = urlRoot + 'rest-auth/'
let urlAuthUser = urlAuth + 'user/'
let urlRegistration = urlAuth + 'registration/'        
let urlLogin = urlAuth + 'login/'

const isLoading = isLoading => {
    return {
        type: 'LOADING',
        loading: isLoading
    }
}

export const fetchTweets = userPk => {
    return dispatch => {
        if (!userPk) return
        dispatch(isLoading(true))
        return axios.get(urlRichTweets + '?pk=' + userPk)
            .then(response => response.data)
            .then(json => dispatch(receiveTweets(json)))
            .then(() => dispatch(isLoading(false)))
            .catch(() => dispatch(isLoading(false)))
    }
}

const receiveTweets = json => {
    return {
        type: 'RECEIVE_TWEETS',
        tweets: json
    }
}

export const sendTweet = (text, user, username, date) => {
    return dispatch => {
        return axios.post(urlTweets, {
            text: text,
            user: user,
            user_name: username,
            date: date
        })
            .then(() => dispatch(shouldFetch()))
    }
}

const shouldFetch = () => {
    return {
        type: 'SHOULD_FETCH'
    }
}

export const register = (username, password, email) => {
    return dispatch => {
        dispatch(isLoading(true))
        axios.post(urlRegistration, {
            username: username,
            password1: password,
            password2: password,
            email: email
        })
            .then(response => response.data.key)
            .then(token => dispatch(registerToken(token, username)))
            .then(() => dispatch(isLoading(false))) 
            .catch(() => dispatch(isLoading(false)))
    }
}

export const login = (username, password) => {
    return dispatch => {
        dispatch(isLoading(true))
        return axios.post(urlLogin, {
            username: username, 
            password: password
        })
            .then(response => response.data.key)
            .then(token => {
                dispatch(registerToken(token))
                dispatch(getAuthUser(token, username))
            })
            .then(() => dispatch(isLoading(false)))
            .catch(() => dispatch(isLoading(false)))
    }
}

const registerToken = token => {
    axios.defaults.headers.post['Authorization'] = 'Token ' + token
    return {
        type: 'REGISTER_TOKEN',
        token: token
    }
}

//Getting user from the server at .../rest-auth/user/ with username in data
const getAuthUser = (token, user) => {
    return dispatch => {
        axios.get(urlAuthUser, {
            headers: {
                authorization: 'Token ' + token,
            },
            user_name: user
        })
            .then(response => response.data)  
            .then(user => dispatch(storeUser(user)))  
    }
}

const storeUser = user => {
    return {
        type: 'STORE_USER',
        user: user
    }
}

export const logout = () => {
    axios.defaults.headers.post['Authorization'] = ''
    return {
        type: 'LOGOUT'
    }
}

export const redirect = location => {
    return {
        type: 'REDIRECT',
        to: location
    }
}
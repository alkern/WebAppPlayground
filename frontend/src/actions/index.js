export const isLoading = isLoading => {
    return {
        type: 'LOADING',
        loading: isLoading
    }
}

export const fetchTweets = userPk => {
    return {
        type: 'FETCH_TWEETS',
        pk: userPk
    }
}

export const receiveTweets = json => {
    return {
        type: 'RECEIVE_TWEETS',
        tweets: json
    }
}

export const sendTweet = (text, user, username, date) => {
    return {
        type: 'SEND_TWEET',
        text: text,
        user: user,
        username: username,
        date: date
    }
}

export const shouldFetch = () => {
    return {
        type: 'SHOULD_FETCH'
    }
}

export const register = (username, password, email) => {
    return {
        type: 'REGISTER',
        username: username,
        password: password,
        email: email
    }
}

export const login = (username, password) => {
    return {
        type: 'LOGIN',
        username: username,
        password: password
    }
}

export const storeUser = user => {
    return {
        type: 'STORE_USER',
        user: user
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}

export const reportError = error => {
    return {
        type: 'ERROR',
        error: error
    }
}
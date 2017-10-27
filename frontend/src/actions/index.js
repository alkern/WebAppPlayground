export const registerToken = token => {
    return {
        type: "REGISTER_TOKEN",
        token
    }
}

export const fetchTweets = () => {
    return dispatch => {
        return fetch("http://localhost:8000/tweets/")
        .then(response => response.json())
        .then(json => dispatch(receiveTweets(json)))
    }
}

const receiveTweets = json => {
    return {
        type: "RECEIVE_TWEETS",
        tweets: json
    }
}
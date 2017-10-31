const initialState = {
    tweets: [],
    shouldFetch: true
}

export const tweets = (state = initialState, action) => {
    switch(action.type) {
    case 'RECEIVE_TWEETS':
        return Object.assign({}, state, {
            tweets: action.tweets,
            shouldFetch: false
        })
    case 'SHOULD_FETCH':
        return Object.assign({}, state, {
            shouldFetch: true
        })
    default:
        return state
    }
}
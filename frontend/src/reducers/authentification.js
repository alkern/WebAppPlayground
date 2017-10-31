let initialState = {
    isLoading: false,
    token: null,
    user: null
}

export const authentification = (state = initialState, action) => {
    switch(action.type) {
    case 'LOADING':
        return Object.assign({}, state, {
            isLoading: action.loading
        })
    case 'REGISTER_TOKEN':
        return Object.assign({}, state, {
            token: action.token
        })
    case 'LOGOUT':
        return Object.assign({}, state, {
            token: null,
            user: null
        })
    case 'STORE_USER':
        return Object.assign({}, state, {
            user: action.user
        })
    default:
        return state
    }
}
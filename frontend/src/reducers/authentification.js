let initialState = {
    isLoading: false,
}

export const authentification = (state = initialState, action) => {
    switch(action.type) {
        case "LOADING":
            return Object.assign({}, state, {
                isLoading: action.loading
            })
        case "REGISTER_TOKEN":
            return Object.assign({}, state, {
                token: action.token,
                user: action.user
            })
        case "LOGOUT":
            return Object.assign({}, state, {
                token: null,
                user: null
            })
        default:
            return state
    }
}
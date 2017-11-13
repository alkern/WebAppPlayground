let initialState = {
    isLoading: false,
    user: null
}

export const authentification = (state = initialState, action) => {
    switch(action.type) {
    case 'LOADING':
        return Object.assign({}, state, {
            isLoading: action.loading
        })
    case 'LOGOUT':
        return Object.assign({}, state, {
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
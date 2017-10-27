export const authentification = (state = {}, action) => {
    switch(action.type) {
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
export const authentification = (state = "", action) => {
    switch(action.type) {
        case "REGISTER_TOKEN":
            return action.token
        default:
            return state
    }
}
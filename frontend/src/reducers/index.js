import { combineReducers } from 'redux'
import { authentification } from './authentification'
import { tweets } from './tweets'

const twitterReducer = combineReducers({
    authentification,
    tweets
})

export default twitterReducer
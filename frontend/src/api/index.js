import axios from 'axios'
import { put } from 'redux-saga/effects'
import { isLoading } from '../actions'

let urlRoot = ''
let urlApi = urlRoot + 'v1/'
let urlTweets = urlApi + 'tweet/'
let urlRichTweets = urlApi + 'rtweet/'
let urlAuth = urlRoot + 'rest-auth/'
let urlAuthUser = urlAuth + 'user/'
let urlRegistration = urlAuth + 'registration/'        
let urlLogin = urlAuth + 'login/'

function getTweets(userPk) {
    return axios.get(urlRichTweets + '?pk=' + userPk)
        .then(response => response.data)
        .catch(() => put(isLoading(false)))
}

export { getTweets }
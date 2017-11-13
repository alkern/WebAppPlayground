import { takeEvery, put, call } from 'redux-saga/effects'
import Api from '../api'
import { shouldFetch, receiveTweets, isLoading, storeUser } from '../actions'

let api = new Api()

function* fetchTweets(action) {
    yield put(isLoading(true))
    const tweets = yield call(api.getTweets, action.pk)
    yield put(isLoading(false))
    yield put(receiveTweets(tweets))
}

function* sendTweet(action) {
    yield call(api.sendTweet, action.text, action.user, action.username, action.date)
    yield put(shouldFetch())
}

function* register(action) {    
    yield put(isLoading(true))
    const token = yield call(api.register, action.username, action.password, action.email)
    api.setToken(token)
    const user = yield call(api.getAuthUser, token, action.username)
    yield put(storeUser(user))
    yield put(isLoading(false))
}

function* login(action) {    
    yield put(isLoading(true))
    const token = yield call(api.login, action.username, action.password)
    api.setToken(token)
    const user = yield call(api.getAuthUser, token, action.username)
    yield put(storeUser(user))    
    yield put(shouldFetch())
    yield put(isLoading(false))
}

function* logout() {
    yield call(api.logout)
    api.resetToken()
    yield put(receiveTweets([]))
}

function* sagas() {
    yield takeEvery('FETCH_TWEETS', fetchTweets)
    yield takeEvery('SEND_TWEET', sendTweet)
    yield takeEvery('REGISTER', register)
    yield takeEvery('LOGIN', login)
    yield takeEvery('LOGOUT', logout)
}

export default sagas
import { takeEvery, put, call } from 'redux-saga/effects'
import { getTweets } from '../api'

function* fetchTweets(action) {
    const tweets = yield call(getTweets, action.pk)
    yield put({
        type: 'RECEIVE_TWEETS',
        tweets: tweets
    })
}

function* sagas() {
    yield takeEvery('FETCH_TWEETS', fetchTweets)
}

export default sagas
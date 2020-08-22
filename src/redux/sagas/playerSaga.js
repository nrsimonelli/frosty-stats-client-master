import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// lead to get 
function* fetchPlayer(action) {
  try {
    console.log('in player saga fetch:');
    const response = yield axios.get('/api/stat/')
    
    yield put({ type: 'SET_PLAYER', payload: response.data });
  } catch (error) {
    console.log('player GET request failed', error);
  }
}


// lead to post then get
function* addPlayer(action) {
    try{
        yield axios.post('api/stat/add', action.payload);

    } catch (error) {
        console.log('error with POST SAGA', error);
    }
    
}


function* playerSaga() {
  yield takeLatest('ADD_PLAYER', addPlayer);
  yield takeLatest('FETCH_PLAYER', fetchPlayer);
}

export default playerSaga;
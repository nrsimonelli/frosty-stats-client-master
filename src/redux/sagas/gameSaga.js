import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// lead to get 
function* fetchGame(action) {
  try {
    console.log('in stat saga fetch:', action.payload);
    const response = yield axios.get('/api/stat/' + action.payload)
    
    yield put({ type: 'SET_GAME', payload: response.data });
  } catch (error) {
    console.log('stat GET request failed', error);
  }
}


// lead to post then get
function* addGame(action) {
    try{
        yield axios.post('api/stat/add', action.payload);

    } catch (error) {
        console.log('error with POST SAGA', error);
    }
    
}


function* gameSaga() {
  yield takeLatest('ADD_GAME', addGame);
  yield takeLatest('FETCH_GAME', fetchGame);
}

export default gameSaga;
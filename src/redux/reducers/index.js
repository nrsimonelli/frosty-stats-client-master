import { combineReducers } from 'redux';
import game from './gameReducer';
import player from './playerReducer';



// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  game,
  player,
});

export default rootReducer;
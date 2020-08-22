const gameReducer = (state = [], action) => {
  switch (action.type) {
      // FETCH_STAT
    case 'SET_GAME':
      return action.payload;

    case 'CLEAR_GAME':
      return [];

    default:
      return state;
  }
};


export default gameReducer;
const playerReducer = (state = [], action) => {
  switch (action.type) {
      // FETCH_STAT
    case 'SET_PLAYER':
      return action.payload;

    case 'CLEAR_PLAYER':
      return [];

    default:
      return state;
  }
};


export default playerReducer;
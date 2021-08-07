import { RECEIVE_SEARCHID } from '../actions/actions';

const initialState = '';

const searchIdReducer = (state = initialState, { type, payload }) => {
  if (type === RECEIVE_SEARCHID) {
    return payload;
  }
  return state;
};

export default searchIdReducer;

import { RECEIVE_TICKETS } from '../actions/actions';

const loadTicketsReducer = (state = [], { type, payload }) => {
  if (type === RECEIVE_TICKETS) {
    return [...state, ...payload];
  }
  return state;
};

export default loadTicketsReducer;

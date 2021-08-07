import { SET_ACTIVE_SORTING } from '../actions/actions';

const initialState = [
  {
    sortId: 'cheap',
    text: 'САМЫЙ ДЕШЕВЫЙ',
    active: true,
  },
  {
    sortId: 'fast',
    text: 'САМЫЙ БЫСТРЫЙ',
    active: false,
  },
];

const sortingTicketsReducer = (state = initialState, { type, payload }) => {
  if (type === SET_ACTIVE_SORTING) {
    const sortingList = state.map((el) => (el.sortId === payload ? { ...el, active: true } : { ...el, active: false }));
    return [...sortingList];
  }
  return state;
};

export default sortingTicketsReducer;

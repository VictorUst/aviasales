import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import filterTicketsReducer from '../reducers/filterTicketsReducer';
import loadTicketsReducer from '../reducers/loadTicketsReducer';
import sortingTicketsReducer from '../reducers/sortingTicketsReducer';
import searchIdReducer from '../reducers/searchIdReducer';
import { COMPLETED_LOADING } from '../actions/actions';

const completedLoading = (state = false, { type }) => {
  if (type === COMPLETED_LOADING) {
    return true;
  }
  return state;
};

const redusers = combineReducers({
  loadTicketsReducer,
  filterTicketsReducer,
  sortingTicketsReducer,
  searchIdReducer,
  completedLoading,
});

const store = createStore(redusers, composeWithDevTools(applyMiddleware(reduxThunk)));

export default store;

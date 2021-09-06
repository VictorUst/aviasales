import addIdToTickets from '../components/App/addIdToTickets.utils';
import { getSearchId, getTickets } from '../services/apiRequest';

export const SET_ACTIVE_FILTER = 'SET_ACTIVE_FILTER';
export const SET_ACTIVE_SORTING = 'SET_ACTIVE_SORTING';
export const RECEIVE_SEARCHID = 'RECEIVE_SEARCHID';
export const RECEIVE_TICKETS = 'RECEIVE_TICKETS';
export const THROW_ERROR = 'THROW_ERROR';
export const COMPLETED_LOADING = 'COMPLETED_LOADING';

export const setActiveFilter = (filterId) => ({
  type: SET_ACTIVE_FILTER,
  payload: filterId,
});

export const setActiveSorting = (sortId) => ({
  type: SET_ACTIVE_SORTING,
  payload: sortId,
});
export const throwError = (message) => ({
  type: THROW_ERROR,
  payload: message,
});
export const receiveSearchId = (searchId) => ({
  type: RECEIVE_SEARCHID,
  payload: searchId,
});
export const receiveTickets = (tickets) => ({
  type: RECEIVE_TICKETS,
  payload: tickets,
});
export const completedLoading = () => ({
  type: COMPLETED_LOADING,
});

const getTicketsInLoop = () => async (searchId, cbDispatch, addIdFn) => {
  const response = await getTickets(searchId);
  const { tickets, stop } = response;

  const ticketsWithId = addIdFn(tickets);

  cbDispatch(receiveTickets(ticketsWithId));

  if (stop) {
    cbDispatch(completedLoading());
    return;
  }

  await getTicketsInLoop(searchId, cbDispatch, addIdFn);
};

export const asyncGetTickets = () => async (dispatch) => {
  try {
    const response = await getSearchId();
    const { searchId } = response;

    dispatch(receiveSearchId(searchId));

    const addIdFn = addIdToTickets();

    getTicketsInLoop(searchId, dispatch, addIdFn);
  } catch (error) {
    dispatch(throwError(error));
  }
};

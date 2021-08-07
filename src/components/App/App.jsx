import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FilterTicketsContainer from '../FilterTickets/FilterTicketsContainer';
import SortingTicketsContainer from '../SortingTickets/SortingTicketsContainer';
import logo from '../../img/Logo.svg';
import classes from './App.module.css';
import TicketListContainer from '../TicketList/TicketListContainer';
import addIdToTickets from '../../services/addIdToTickets';
import { getSearchId, getTickets } from '../../services/apiRequest';
import { receiveSearchId, receiveTickets, throwError, completedLoading } from '../../actions/actions';
import LoaderContainer from '../Loader/LoaderContainer';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const addIdFn = addIdToTickets();

    const fetchData = async () => {
      try {
        const responseId = await getSearchId();
        const { searchId } = responseId;

        dispatch(receiveSearchId(searchId));

        while (true) {
          // eslint-disable-next-line no-await-in-loop
          const responseTikets = await getTickets(searchId);
          const { tickets, stop } = responseTikets;
          const ticketsWithId = addIdFn(tickets);
          dispatch(receiveTickets(ticketsWithId));

          if (stop) {
            dispatch(completedLoading());
            break;
          }
        }
      } catch (error) {
        dispatch(throwError(error));
      }
    };

    fetchData();
    return () => {
      dispatch(completedLoading());
    };
  }, [dispatch]);

  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <img className={classes.logo} src={logo} alt="Логотип авиасейлс" />
        <div className={classes.loading}>
          <LoaderContainer />
        </div>
      </header>
      <main className={classes.main}>
        <FilterTicketsContainer />
        <SortingTicketsContainer />
        <TicketListContainer />
      </main>
    </div>
  );
};
export default App;

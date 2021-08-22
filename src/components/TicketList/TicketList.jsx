import React from 'react';
import PropTypes from 'prop-types';
import classes from './TicketList.module.css';
import TicketItem from '../TicketItem/TicketItem';
import mappingTickets from '../../services/mappingTickets';
import FilterError from '../FilterError/FilterError';

const TicketList = ({ tickets, filters, sorting }) => {
  const filterTickets = mappingTickets(filters, tickets, sorting);
  const ticketsElements = filterTickets
    .slice(0, 5)
    .map((ticket) => <TicketItem key={`${ticket.id}`} ticket={ticket} />);

  const isFilterError = filters.reduce((acc, filter) => {
    const status = filter.filterId !== 'all' && filter.enabled ? 1 : 0;
    return acc + status;
  }, 0);

  const resultFilterTickets = !isFilterError ? <FilterError /> : ticketsElements;

  return <div className={classes.ticketlist}>{resultFilterTickets}</div>;
};

export default TicketList;

TicketList.propTypes = {
  tickets: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.number,
      carrier: PropTypes.string,
      segments: PropTypes.arrayOf(
        PropTypes.shape({
          origin: PropTypes.string,
          destination: PropTypes.string,
          date: PropTypes.string,
          stops: PropTypes.arrayOf(PropTypes.string),
          duration: PropTypes.number,
        })
      ),
    })
  ).isRequired,
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      title: PropTypes.string,
      enabled: PropTypes.bool,
    })
  ).isRequired,
  sorting: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      name: PropTypes.string,
      active: PropTypes.bool,
    })
  ).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SortingTickets from './SortingTickets';
import { setActiveSorting } from '../../actions/actions';

const SortingTicketsContainer = ({ sortingTicketsReducer, changeSort }) => (
  <SortingTickets sortingTicketsReducer={sortingTicketsReducer} changeSort={changeSort} />
);

const mapStateToProps = ({ sortingTicketsReducer }) => ({
  sortingTicketsReducer,
});

const mapDispatchToProps = (dispatch) => ({
  changeSort: (sortId) => {
    dispatch(setActiveSorting(sortId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SortingTicketsContainer);

SortingTicketsContainer.propTypes = {
  sortingTicketsReducer: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      name: PropTypes.string,
      active: PropTypes.bool,
    })
  ).isRequired,
  changeSort: PropTypes.func.isRequired,
};

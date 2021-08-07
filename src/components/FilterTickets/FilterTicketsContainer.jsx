import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilterTickets from './FilterTickets';
import { setActiveFilter } from '../../actions/actions';

const FilterTicketsContainer = ({ filterTicketsReducer, onClick }) => (
  <FilterTickets filterTicketsReducer={filterTicketsReducer} onClick={onClick} />
);

const mapStateToProps = ({ filterTicketsReducer }) => ({
  filterTicketsReducer,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (filterId) => {
    dispatch(setActiveFilter(filterId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterTicketsContainer);

FilterTicketsContainer.propTypes = {
  filterTicketsReducer: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      title: PropTypes.string,
      enabled: PropTypes.bool,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

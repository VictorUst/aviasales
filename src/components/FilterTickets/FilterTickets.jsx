import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './FilterTickets.module.css';

const FilterTickets = ({ filterTicketsReducer, onClick }) => {
  const filterList = filterTicketsReducer.map(({ filterId, label, enabled }) => (
    <label key={filterId} className={classes.label}>
      <input
        id={filterId}
        value={filterId}
        className={classNames(classes.input, classes.hidden)}
        type="checkbox"
        checked={enabled}
        onChange={() => onClick(filterId)}
      />
      <span className={classes.checker} />
      {label}
    </label>
  ));
  return (
    <div className={classes.filter_container}>
      <h3 className={classes.filter_header}>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
      <form className={classes.filter_form}>{filterList}</form>
    </div>
  );
};

export default FilterTickets;

FilterTickets.propTypes = {
  filterTicketsReducer: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      title: PropTypes.string,
      enabled: PropTypes.bool,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './SortingTickets.module.css';

const SortingTickets = ({ sortingTicketsReducer, changeSort }) => {
  const sortingList = sortingTicketsReducer.map((sortItem) => {
    const { sortId, text, active } = sortItem;

    const activeSortClass = classNames({
      [classes.btn]: true,
      [classes.btn_clicked]: active,
    });

    return (
      <button
        key={sortId}
        type="button"
        className={activeSortClass}
        onClick={() => {
          changeSort(sortId);
        }}
      >
        {text}
      </button>
    );
  });

  return <div className={classes.sorting}>{sortingList}</div>;
};

export default SortingTickets;

SortingTickets.propTypes = {
  sortingTicketsReducer: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      name: PropTypes.string,
      active: PropTypes.bool,
    })
  ).isRequired,
  changeSort: PropTypes.func.isRequired,
};

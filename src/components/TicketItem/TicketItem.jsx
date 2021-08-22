import React from 'react';
import PropTypes from 'prop-types';
import classes from './TicketItem.module.css';
import logo from '../../img/S7_Logo.svg';
import { formatTime, formatArrivalTime, formatDuration, formatStops, formatStopsLabel } from './myComponent.utils';

const TicketItem = ({ ticket }) => {
  const {
    price,
    segments: [there, back],
  } = ticket;

  return (
    <div className={classes.ticket}>
      <header className={classes.header}>
        <div className={classes.price}>{price.toLocaleString('ru')} Р</div>
        <div className={classes.logo}>
          <img src={logo} alt="Логотип Airlines" />
        </div>
      </header>
      <section className={classes.ticket_info}>
        <div className={classes.block}>
          <div className={classes.item}>
            <p className={classes.top}>
              {there.origin} - {there.destination}
            </p>
            <p className={classes.bottom}>
              {formatTime(there.date)} - {formatArrivalTime(there.date, there.duration)}
            </p>
          </div>
          <div className={classes.item}>
            <p className={classes.top}>В ПУТИ</p>
            <p className={classes.bottom}>{formatDuration(there.duration)}</p>
          </div>
          <div className={classes.item}>
            <p className={classes.top}>{formatStopsLabel(there.stops)}</p>
            <p className={classes.bottom}>{formatStops(there.stops)}</p>
          </div>
        </div>
        <div className={classes.block}>
          <div className={classes.item}>
            <p className={classes.top}>
              {back.origin} - {back.destination}
            </p>
            <p className={classes.bottom}>
              {formatTime(back.date)} - {formatArrivalTime(back.date, back.duration)}
            </p>
          </div>
          <div className={classes.item}>
            <p className={classes.top}>В ПУТИ</p>
            <p className={classes.bottom}>{formatDuration(back.duration)}</p>
          </div>
          <div className={classes.item}>
            <p className={classes.top}>{formatStopsLabel(back.stops)}</p>
            <p className={classes.bottom}>{formatStops(back.stops)}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

TicketItem.propTypes = {
  ticket: PropTypes.shape({
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
  }).isRequired,
};

export default TicketItem;

import moment from 'moment';

export const formatTime = (date) => moment(date).format('HH:mm');

export const formatArrivalTime = (date, duration) => moment(date).add('minutes', duration).format('HH:mm');

export const formatDuration = (duration) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return `${hours}ч ${minutes}м`;
};

export const formatStops = (stops = []) => stops.join(', ');

export const formatStopsLabel = (stops = []) => {
  let sklon = 'ПЕРЕСАДКИ';
  if (stops.length === 0) {
    return 'БЕЗ ПЕРЕСАДОК';
  }
  if (stops.length === 1) {
    sklon = 'ПЕРЕСАДКА';
  }
  if (stops.length > 4) {
    sklon = 'ПЕРЕСАДОК';
  }
  return `${stops.length} ${sklon}`;
};

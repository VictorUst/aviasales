const sortByPrice = (tickets) => {
  const sortTickets = [...tickets];
  return sortTickets.sort((first, second) => (first.price > second.price ? 1 : -1));
};

const sortByDuration = (tickets) => {
  const sortTickets = [...tickets];
  return sortTickets.sort((first, second) => (first.segments[0].duration > second.segments[0].duration ? 1 : -1));
};

const mappingTickets = (filters, tickets, sorting) => {
  const filterTickets = tickets.filter((ticket) => {
    const { stops } = ticket.segments[0];
    const countStops = stops.length;
    for (const { filterId, enabled } of filters) {
      if (enabled) {
        if (filterId === 'all') return true;
        if (filterId === 0 && countStops === 0) return true;
        if (filterId === 1 && countStops === 1) return true;
        if (filterId === 2 && countStops === 2) return true;
        if (filterId === 3 && countStops === 3) return true;
      }
    }
    return false;
  });

  const isCurrentSortedTickets = sorting[0].active;

  const sortingTickets = isCurrentSortedTickets ? sortByPrice(filterTickets) : sortByDuration(filterTickets);
  return sortingTickets;
};

export default mappingTickets;

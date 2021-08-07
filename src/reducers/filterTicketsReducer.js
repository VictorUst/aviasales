import { SET_ACTIVE_FILTER } from '../actions/actions';

const initialState = [
  {
    filterId: 'all',
    label: 'Все',
    enabled: false,
  },
  {
    filterId: 0,
    label: 'Без пересадок',
    enabled: true,
  },
  {
    filterId: 1,
    label: '1 пересадка',
    enabled: false,
  },
  {
    filterId: 2,
    label: '2 пересадки',
    enabled: false,
  },
  {
    filterId: 3,
    label: '3 пересадки',
    enabled: false,
  },
];

const switchFilters = (filters, filterId) => {
  // Если включается галочка "Все" - проставляются галочки всем остальным фильтрам
  if (filterId === 'all') {
    const index = filters.findIndex((el) => el.filterId === 'all');
    const { enabled } = filters[index];
    return filters.map((filter) => ({ ...filter, enabled: !enabled }));
  }

  // активируется необходимая галочка
  const newFilters = filters.map((filter) =>
    filter.filterId === filterId ? { ...filter, enabled: !filter.enabled } : filter
  );

  // количество проставленных галочек
  const countEnabled = newFilters.reduce((acc, filter) => {
    const status = filter.filterId !== 'all' && filter.enabled ? 1 : 0;
    return acc + status;
  }, 0);

  // Если проставить каждую галочку по пересадкам - галочка "Все" автоматически включится
  if (countEnabled === newFilters.length - 1) {
    return newFilters.map((filter) => (filter.filterId === 'all' ? { ...filter, enabled: true } : filter));
  }
  // Если при включенной галочке "Все" снимается любая другая галочка - галочка "Все" тоже снимается
  if (countEnabled !== newFilters.length - 1) {
    return newFilters.map((filter) => (filter.filterId === 'all' ? { ...filter, enabled: false } : filter));
  }

  return [...newFilters];
};

const filterTicketsReducer = (state = initialState, { type, payload }) => {
  if (type === SET_ACTIVE_FILTER) {
    const filtersList = switchFilters(state, payload);
    return [...filtersList];
  }
  return state;
};

export default filterTicketsReducer;

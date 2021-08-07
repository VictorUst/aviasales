import { connect } from 'react-redux';
import TicketList from './TicketList';

const mapStateToProps = (state) => ({
  tickets: state.loadTicketsReducer,
  filters: state.filterTicketsReducer,
  sorting: state.sortingTicketsReducer,
});

const TicketListContainer = connect(mapStateToProps)(TicketList);

export default TicketListContainer;

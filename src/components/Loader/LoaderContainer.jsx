import { connect } from 'react-redux';
import Loader from './Loader';

const mapStateToProps = ({ completedLoading }) => ({
  loading: completedLoading,
});

export default connect(mapStateToProps)(Loader);

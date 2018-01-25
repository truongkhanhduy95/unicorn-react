import ActiveVideo from '../components/ActiveVideo/ActiveVideo';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    activeVideo: state.activeVideo,
  };
}

export default connect(mapStateToProps)(ActiveVideo);

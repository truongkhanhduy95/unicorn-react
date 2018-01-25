import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectVideo } from '../../actions/index';
import VideoItem from '../components/VideoItem/VideoItem';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ onVideoSelect: selectVideo }, dispatch);
}

export default connect(null, mapDispatchToProps)(VideoItem);

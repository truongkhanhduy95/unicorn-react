import VideoList from '../components/VideoList';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    videos: state.videos,
  };
}

export default connect(mapStateToProps)(VideoList);

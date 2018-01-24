import VideoList from '../components/video-list';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    videos: state.videos,
  };
}

export default connect(mapStateToProps)(VideoList);

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';
import * as CommonActions from '../actions/Common';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CommonActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
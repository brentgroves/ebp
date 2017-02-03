import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import POReqTrans from '../../components/port/POReqTrans';
import * as POReqActions from '../../actions/port/POReqTrans';

function mapStateToProps(state) {
  return {
    	POReqTrans: state.POReqTrans
	};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(POReqActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(POReqTrans);
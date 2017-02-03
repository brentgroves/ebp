import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import POCategories from '../../components/port/POCategories';
//import * as POUpdateAppActions from '../actions/POUpdateApp';
import * as POReqTrans from '../../actions/port/POReqTrans';

function mapStateToProps(state) {
  return {
    	poCategories: state.POCategories
	};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(POReqTrans, dispatch);
//  return bindActionCreators(POUpdateAppActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(POCategories);

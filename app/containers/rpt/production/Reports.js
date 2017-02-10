import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Reports from '../../../components/rpt/production/Reports';
import * as Actions from '../../../actions/rpt/production/Actions';

function mapStateToProps(state) {
  return {
    	Rpt: state.Reports
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Reports);

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PORTGrid from '../../components/port/PORTGrid';
import * as POReqTrans from '../../actions/port/POReqTrans';

function mapStateToProps(state) {
  return {
    	POReqTrans: state.POReqTrans
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(POReqTrans, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PORTGrid);

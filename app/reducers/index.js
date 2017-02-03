// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import POReqTrans from './POReqTrans'
import Common from './Common'
import GenReceivers from './GenReceivers'

const rootReducer = combineReducers({
  counter,
  Common,
  POReqTrans,
  GenReceivers,
  routing
});

export default rootReducer;

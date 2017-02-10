// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/home/HomePage';
import POReqTrans from './containers/production/port/POReqTrans';
import GenReceivers from './containers/production/gr/GenReceivers'
import ProdReports from './containers/rpt/production/Reports'
import CounterPage from './containers/CounterPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/POReqTrans" component={POReqTrans} />
    <Route path="/GenReceivers" component={GenReceivers} />
    <Route path="/ProdReports" component={ProdReports} />
    <Route path="/counter" component={CounterPage} />
  </Route>
);


// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/home/HomePage';
import POReqTrans from './containers/port/POReqTrans';
import GenReceivers from './containers/gr/GenReceivers'
import CounterPage from './containers/CounterPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/POReqTrans" component={POReqTrans} />
    <Route path="/GenReceivers" component={GenReceivers} />
    <Route path="/counter" component={CounterPage} />
  </Route>
);


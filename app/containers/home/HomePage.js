import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../../components/home/Home';
import * as HomeActions from '../../actions/home/home';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(HomeActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);


/*
import React, { Component } from 'react';
import Home from '../components/Home';

export default class HomePage extends Component {
  render() {
    return (
      <Home />
    );
  }
}
*/


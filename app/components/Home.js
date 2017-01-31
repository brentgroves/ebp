// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';

import styles from './Home.css';

import { Grid, Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem, Jumbotron,Button} from 'react-bootstrap';
import {Header as NavbarHeader, Brand as NavbarBrand, Toggle as NavbarToggle, Collapse as NavbarCollapse, Text as NavbarText } from 'react-bootstrap/lib/Navbar'


export default class Home extends Component {

  render() {
  var navbar;
  navbar=
  <Navbar inverse  fixedBottom>
    <NavbarHeader>
      <NavbarBrand>
        <div style={{color: '#33ccff'}}>Busche CNC</div>
      </NavbarBrand>
      <NavbarToggle />
    </NavbarHeader>
    <NavbarCollapse>
      <Nav>
        <LinkContainer to="/counter">
          <NavItem eventKey={2}>PO Request Transfer</NavItem>
        </LinkContainer>      
        <LinkContainer to="/counter">
          <NavItem eventKey={1}>Generate Receivers</NavItem>
        </LinkContainer>      
        <LinkContainer to="/counter">
          <NavItem eventKey={1}>Reports</NavItem>
        </LinkContainer>      

      </Nav>
    </NavbarCollapse>
  </Navbar>

    return (
      <div>
        <div className={styles.container}>
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
        </div>
        {navbar}
      </div>
    );
  }
}

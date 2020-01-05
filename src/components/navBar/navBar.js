import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import {NavLink, Route, BrowserRouter as Router} from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { apiUrl } from '../../constants';
import { GET_USER_LIST } from '../../redux/actionTypes';
import Months from '../months/months';

class NavBar extends Component {
  
  componentDidMount() {
    axios.get(`${apiUrl}`)
      .then(res => {
        const userList = res.data;
        this.props.populateUserList(userList);
      });
  }
  
  render() {
    const { match } = this.props;
  
    return (
      <div>
        <Router>
          <Navbar bg="light" expand="lg" variant="dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Button variant="dark">
                  <Nav.Item>
                    <NavLink to={`${match.url}/months`} className="nav-link" activeClassName="active">Get users</NavLink>
                  </Nav.Item>
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className="tabs">
            <Route path={`${match.path}/months`} component={Months} />
          </div>
        </Router>
      </div>
    );
  }
}

NavBar.propTypes = {
  match: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    userList: state.users.userList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    populateUserList: (userList) => {
      dispatch({type: GET_USER_LIST, payload : userList });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);

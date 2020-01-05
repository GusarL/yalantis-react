import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../navBar/navBar';

const MainPageContainer = ({match}) => {
  return (
    <div>
      <Navbar match={match}/>
    </div>
  );};

MainPageContainer.propTypes = {
  match: PropTypes.object,
};

export default MainPageContainer;

import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import MainPageContainer from './components/mainPageContainer/mainPageContainer';

function App({match}) {
  return (
    <div className="App">
      <MainPageContainer match={match}/>
    </div>
  );
}

App.propTypes = {
  match: PropTypes.object,
};

export default App;

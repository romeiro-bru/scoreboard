import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = ({ title }) => {
    return(
        <header>
          <Stats/>
          <h1>{ title }</h1>
          <Stopwatch />
        </header>
    );
}

// validation, title should be a string
// player should be an array of objects
Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'Scoreboard'
}

export default Header;
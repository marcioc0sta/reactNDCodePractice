import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../logo.svg';

const Header = props => {
  const { title } = props;
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">{title}</h1>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header;




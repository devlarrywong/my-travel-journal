import React from 'react';
import appLogo from '../assets/earth.svg';

const Header = () => {
  return (
    <div className="Header__container">
      <div className="Header__logo-container">
        <img className="Header__logo" src={appLogo} />
      </div>
      <h2 className="Header__title">my travel journal.</h2>
    </div>
  );
};

export default Header;

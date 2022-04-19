import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import './Header.css';

const Header = () => {
  const { state } = React.useContext(AppContext);

  const { cart } = state;

  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">PlatziConf Merch</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket"></i>
        </Link>
        {!!cart.length && <div className="Header-alert">{cart.length}</div>}
      </div>
    </div>
  );
};

export default Header;

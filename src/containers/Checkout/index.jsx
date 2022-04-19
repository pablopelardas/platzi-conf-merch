import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';

import './Checkout.css';

const Checkout = () => {
  const { state, removeFromCart } = React.useContext(AppContext);
  const { cart } = state;

  const handleRemove = (index) => {
    removeFromCart(index);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>{!!cart.length ? `Lista de Pedidos:` : `Sin pedidos`}</h3>
        {cart.map((item, index) => (
          <div className="Checkout-item" key={`checkout-item:${item.id}`}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <button type="button" onClick={() => handleRemove(index)}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        ))}
      </div>
      {!!cart.length && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;

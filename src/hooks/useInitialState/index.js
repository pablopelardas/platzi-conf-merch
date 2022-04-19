import { useState } from 'react';
import initialState from '../../initialState.js';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (index) => {
    const newCart = state.cart; //Copio la cart actual
    newCart.splice(index, 1); //Elimino 1 elemento del array contando a partir de la posición = index
    setState({
      ...state,
      cart: newCart,
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: payload,
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
  };
};

export default useInitialState;

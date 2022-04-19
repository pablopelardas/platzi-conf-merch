import React from 'react';
import AppContext from '../../context/AppContext';
import Map from '../../components/Map';

import './Success.css';

const Success = () => {
  const { state } = React.useContext(AppContext);
  const { buyer } = state;
  console.log(buyer.address);

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion:</span>
        <div className="Success-map">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Success;

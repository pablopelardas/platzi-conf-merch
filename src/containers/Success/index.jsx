import React from 'react';
import AppContext from '../../context/AppContext';
import useGoogleAddress from '../../hooks/useGoogleAddress';
import Map from '../../components/Map';

import './Success.css';

const Success = () => {
  const { state } = React.useContext(AppContext);
  const { buyer } = state;
  const address = `${buyer.address}  ${buyer.cp} ${buyer.city} ${buyer.state}`;
  const location = useGoogleAddress(address);
  console.log(buyer);

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion:</span>
        <div className="Success-map">
          <Map location={location} />
        </div>
      </div>
    </div>
  );
};

export default Success;

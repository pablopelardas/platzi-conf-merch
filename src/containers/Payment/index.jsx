import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import PaypalPay from '../../components/Paypal';
// import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

import './Payment.css';

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PaypalPay />

          {/* <PayPalScriptProvider options={paypalOptions}>

          </PayPalScriptProvider>

          <PayPalButtons
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amont={handleSumTotal()}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          ></PayPalButtons> */}
        </div>
      </div>
      <div />
    </div>
  );
};

export default Payment;

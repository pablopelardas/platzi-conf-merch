import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../context/AppContext';

const PaypalPay = () => {
  const { state, addNewOrder } = React.useContext(AppContext);
  const { cart, buyer } = state;
  const navigate = useNavigate();

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };
  const handlePaymentSuccess = (data) => {
    navigate('/checkout/success');
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
    }
  };

  return (
    <PayPalScriptProvider
      options={{
        'client-id':
          'Ae9Sk_kxB1H4l7qBmNLAzra1Q-ARQ1vkWFXJ8ybN-9jqP6kw3NaNqsVKPUAkn6S47QKWGMeV7KoceBqD',
        currency: 'USD',
        intent: 'capture',
      }}
    >
      <PayPalButtons
        style={{ layout: 'vertical', shape: 'rect' }}
        disabled={false}
        createOrder={(data, actions) =>
          actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    value: Number.parseFloat(handleSumTotal()).toFixed(2),
                  },
                },
              ],
            })
            .then((orderId) => {
              return orderId;
            })
        }
        onApprove={(data, actions) => {
          return actions.order
            .capture()
            .then((data) => {
              // Your code here after capture the
              handlePaymentSuccess(data);
            })
            .catch((error) => console.log(error));
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalPay;

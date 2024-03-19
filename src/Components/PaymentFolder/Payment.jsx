import React, { useState } from 'react';

const PaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    // Perform payment processing logic here
    console.log('Payment Method:', paymentMethod);
  };

  return (
    <>
        <div className="container">
            <div className="row vh-100 justify-content-center align-items-center text-center">
                   <div>
                        <form onSubmit={handlePaymentSubmit}>
                            <label>
                                <input
                                type="radio"
                                value="creditCard"
                                checked={paymentMethod === 'creditCard'}
                                onChange={handlePaymentMethodChange}
                                />
                                Credit Card
                            </label>
                            <br />
                            <label>
                                <input
                                type="radio"
                                value="paypal"
                                checked={paymentMethod === 'paypal'}
                                onChange={handlePaymentMethodChange}
                                />
                                PayPal
                            </label>
                            <br />
                            <button type="submit">Submit</button>
                        </form>
                   </div>
            </div>
        </div>
    </>

  );
};

export default PaymentMethod;
import React, { useState } from 'react';

const CartIcon = () => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <span>Cart: {cartCount}</span>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default CartIcon;
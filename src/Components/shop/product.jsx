import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems  } = useContext(ShopContext);

  const cartItemCount = cartItems[id];
 
  return (
    <div className="product w-100">
      <Link to={`/product/${id}`} className="product-link">
        <img src={productImage} alt="" className="w-100"/>
        <div className="description">
          <p>
            <b>{productName}</b>
          </p>
          <p> ${price}</p>
        </div>
      </Link>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};

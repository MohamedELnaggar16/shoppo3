import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import styles from '../cart/cart.module.css';
import NavBar from "../NavBarFolder/NavBar";


export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <>
       <NavBar/>
<div className="container">

<div className="cart">
  {PRODUCTS.map((product,i) => { 
    if (cartItems[product.id] !== 0) {
      return <CartItem key={i} data={product} />;
    }
    
  })}
</div>

{totalAmount > 0 ? (
  <div className="container text-center my-3">
    <div className="row">
      <div className="col-md-12">
          <div className="subtotal">
          <h3>Subtotal: <span className="text-muted">$</span>{totalAmount.toLocaleString()}</h3>
          </div>
          <div className="buttons">
            <button onClick={() => navigate("/shop")} className={`${styles.productDetailsBtnEdit1} p-2 fw-bold border-0 mx-1`}>Continue Shopping</button>
            <button onClick={() => {checkout(); navigate("/payment");}} className={`${styles.productDetailsBtnEdit2} p-2 fw-bold mx-1`}>
              Payment
            </button>
          </div>
      </div>
    </div>

  </div>

) : (
         <div className="d-flex justify-content-center align-items-center vh-100">
                   <h2 className={`${styles.mainColor}`}> Your Shopping Cart is Empty</h2>
         </div>
 
)}
</div>
    </>

  );
};
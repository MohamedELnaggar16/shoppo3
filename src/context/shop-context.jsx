import { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);
let checked=[];
for(let i=0;i<=PRODUCTS.length;i++)
{
  checked.push(true)
}

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {

  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCartNotification = () => {
    setCartCount(cartCount + 1);
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    setCartCount(cartCount + 1);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    setCartCount(cartCount - 1);
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };
  const selectedProduct = (itemId , RemoveValue,newAmount) => { 
    if (checked[itemId]===true){
      setCartItems((prev) => ({ ...prev, [itemId]: newAmount })); 
      checked[itemId]=false;
      // console.log("notchecked")
      // console.log(checked[itemId])
    }
    else if (checked[itemId]===false) {
      setCartItems((prev) => ({ ...prev, [itemId]: RemoveValue })); 
      checked[itemId]=true;
      // console.log("Checked")
      // console.log(checked[itemId])
    }  
  };
  
  const deleteProduct = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] * 0 }));
    setCartCount(cartCount * 0);    
  };
  

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    addToCartNotification,
    cartCount,
    selectedProduct,
    deleteProduct,
  };

  return (
            <ShopContext.Provider value={contextValue}>
              {props.children}
            </ShopContext.Provider>
  );
};
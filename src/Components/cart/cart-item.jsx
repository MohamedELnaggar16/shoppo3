import React, { useContext , useEffect} from "react";
import styles from '../ProductDetailsFolder/ProductDetails.module.css'
import { ShopContext } from "../../context/shop-context";
import $ from 'jquery'
import { useNavigate } from "react-router-dom";

export const CartItem = (props) => {
  const { id, productName, price, productImage  } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount, checkout, selectedProduct, deleteProduct} = useContext(ShopContext);
  const navigate = useNavigate();

  useEffect(() => {
    $('.productDetailsImgs').on('click', function(e){
        let imgSrc = $(e.target).attr('src');
            $('.mainImg').attr('src' , imgSrc );
    })

    $('.removeFrompayment').on('click',function(){
        $('.addItemAgain').removeClass('d-none')  
  })
 }, [])

  return (

    <section className={`${styles.productDetailsBg}`}>
    <div className="container p-5">
      
        <div className="row d-flex align-items-center">
    
       <div className={`${styles.mainColor}`}>
        
        <input type="checkbox" value={cartItems[id]} onChange={(e) => selectedProduct(id,Number(e.target.value))} defaultChecked={true}  className="mx-1 removeFrompayment"/>
           select
        </div> 
 
        {/* <div className={`${styles.mainColor} addItemAgain d-none`}>
        <input type="checkbox" value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} className="mx-1 "/>
           remove this item from payment
        </div>    */}

              
            <div className="col-md-4 mt-5 ">
              
                <div className='p-4'> <img src={productImage} alt="" className={`mainImg w-100`} /> </div>
                <div className='text-center'>
                <button type="button" className={`${styles.productDetailsBtnEdit1} btn px-4 ms-1 my-2 fw-bold`} onClick={() => {checkout(); navigate("/payment");}}>BUY NOW</button>
                
                </div>
            </div>
            <div className="col-md-8 mt-5  d-flex justify-content-center align-items-center">
        
                <div className='1'>
                    <p className="fw-bold mx-1">name : {productName}</p>
                    <div className='my-5'>
                      
                        <span className={`${styles.mainColor} mx-1 fw-bold fs-5`}>Price: ${price.toLocaleString()}</span> 
                        <span className='mx-2 fw-bold'><del>185L.E</del></span> 
                        <span className='mx-1 text-primary'>25%off</span>
                    </div>
                    
                    <p className={`${styles.mainColor} mx-1`}> More photos </p>
                    <div className='d-flex w-50'>
                        <div className={`${styles.imgProductHover}`}> <img src={productImage} alt="" className={`productDetailsImgs w-100 px-1`}/> </div>
                        <div className={`${styles.imgProductHover}`}> <img src={productImage} alt="" className={`productDetailsImgs w-100 px-1`} /> </div>
                        <div className={`${styles.imgProductHover}`}> <img src={productImage} alt="" className={`productDetailsImgs w-100 px-1`}/> </div>
                    </div>

                    <p className={`${styles.mainColor} mx-1`}> color </p>
                    <div className='d-flex'>
                        <div className={`${styles.colorChoice} p-3 mx-1`}></div>
                        <div className={`${styles.colorChoice2} p-3 mx-1`}></div>
                        <div className={`${styles.colorChoice3} p-3 mx-1`}></div>
                    </div>

                     <p className={`${styles.mainColor} mx-1 mt-3`}> Quantity </p>
                    <div>
                    <div className="countHandler">
                  <button className={`${styles.minusBtn} mx-1`} onClick={() => removeFromCart(id)}> - </button>
                 
                  <input className={`${styles.inputBtn} text-center fs-5`}
                    value={cartItems[id]}
                    onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                  />
               
                  <button className={`${styles.plusBtn} mx-1`} onClick={() => addToCart(id)}> + </button>

                  <i className={`${styles.deleteBtn} fa-sharp fa-solid fa-trash fs-3 mx-5 my-3`}  onClick={() => deleteProduct(id)}></i>
                    </div>
                 
                    </div> 

                </div>

                <div >
                 
                        <div className={`${styles.offerBorder}  my-3 bg-light p-1`}>
                            
                            <div >  
                                <p className={`${styles.mainColor} me-5`}>30% <br/> off</p>
                                <p>product name</p>
                            </div>
                            <div>
                                <img src={productImage} alt="" className='w-100'/>
                            </div>
                        </div>

                        <div className={`${styles.offerBorder}  my-3 bg-light p-1`}>
                            
                            <div>  
                                <p className={`${styles.mainColor} me-5`} >30%<br /> off</p>
                                <p>product name</p>
                            </div>
                            <div>
                                <img src={productImage} alt="" className='w-100'/>
                            </div>
                        </div>
                   
                </div>
                
               
            </div>
        </div>
    </div>
    </section>

    
  );
};
import React, { useContext , useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import "./productDetails.css";
import styles from '../ProductDetailsFolder/ProductDetails.module.css'
import $ from 'jquery'
import { useNavigate } from "react-router-dom";

export const ProductDetails = () => {

  useEffect(() => {
    $('.productDetailsImgs').on('click', function(e){
        let imgSrc = $(e.target).attr('src');
        console.log(imgSrc)
            $('.mainImg').attr('src' , imgSrc );
    })
 }, [])

  const navigate = useNavigate();

  const { id } = useParams();
  
  const { cartItems, addToCart, removeFromCart, updateCartItemCount, checkout } = useContext(ShopContext);

  // Find the product with the given ID
  const product = PRODUCTS.find((p) => p.id === Number(id));

  // If the product doesn't exist, return an error message
  if (!product) {
    return <div>Product not found</div>;
  }

  // If the product exists, render its details
  const { productName, productImage, price } = product;

  const cartItemCount = cartItems[id];

// to show product details by id
//   const [movieDetails, setMovieDetails] = useState();

// async function showMovieDetails(id){

//   let {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=f1aca93e54807386df3f6972a5c33b50`);
//   setMovieDetails(data);
//   }
//   useEffect(() => {
//     showMovieDetails(parameters.id)
//   }, [])


  return (

    <section className={`${styles.productDetailsBg}`}>
        <div className="container p-5">
        
            <div className="row d-flex align-items-center">
            
            <h5 className={`${styles.mainColor} text-center`}>your selected items</h5>
        
                <div className="col-md-4 mt-5 ">
                
                    <div className='p-4'> <img src={productImage} alt="" className={`mainImg w-100`} /> </div>

                    <div className='text-center'>
                
                    {/* <button className={`${styles.productDetailsBtnEdit1} btn px-4 ms-1 my-2 fw-bold`} onClick={() => addToCart(id)}>
                      Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
                    </button> */}
                  
                    </div>
                    <div className='text-center'>
                        <button type="button" className={`${styles.productDetailsBtnEdit1} btn px-4 ms-1 my-2 fw-bold`} onClick={() => {checkout(); navigate("/payment");}}>
                            BUY NOW
                        </button>
                        <button type="button" className={`${styles.productDetailsBtnEdit2} btn px-4 ms-1 my-2 fw-bold`} onClick={() => addToCart(id)}>
                              Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
                        </button>
                        </div>
                </div>
                <div className="col-md-8 mt-5  d-flex justify-content-center align-items-center">
            
                    <div className='1'>
                        <p className="fw-bold mx-1">name : {productName}</p>
                        <div className='my-5'>
                        
                            <span className={`${styles.mainColor} mx-1 fw-bold fs-5`}>Price: ${price.toLocaleString()}</span> 
                            <span className='mx-1 fw-bold'><del>185 L.E</del> </span> 
                            <span className='mx-1 text-primary'>25% off</span>
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
                                    <p className={`${styles.mainColor} me-5`} >30% <br /> off</p>
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

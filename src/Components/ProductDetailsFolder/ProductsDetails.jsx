import React, { useEffect } from 'react'
import styles from '../ProductDetailsFolder/ProductDetails.module.css'
import productDetailsImg from '../Images/product22.jpg'
import homeImg4 from '../Images/product33.jpg'
import homeImg2 from '../Images/product3.jpg'
import $ from 'jquery'

export default function ProductDetails() {

 useEffect(() => {
    $('.productDetailsImgs').on('click', function(e){
        let imgSrc = $(e.target).attr('src');
        console.log(imgSrc)
            $('.mainImg').attr('src' , imgSrc );
    })
 }, [])
 



 
  return (
    <>
        <section className={`${styles.productDetailsBg}`}>
            <div className="container p-5">
                <div className="row d-flex align-items-center">

                    <div className="col-md-4 mt-5 ">
                        <div className='p-4'> <img src={productDetailsImg} alt="" className={`mainImg w-100`} /> </div>
                        <div className='text-center'>
                        <button type="button" className={`${styles.productDetailsBtnEdit1} btn px-4 ms-1 my-2 fw-bold`}>BUY NOW</button>
                        <button type="button" className={`${styles.productDetailsBtnEdit2} btn px-4 ms-1 my-2 fw-bold`}>ADD TO CARD</button>
                        </div>
                    </div>
                    <div className="col-md-8 mt-5  d-flex justify-content-center align-items-center">
                        <div className='1'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium debitis et sint ipsam dolor.</p>
                            <div className='my-5'>
                                <span className={`${styles.mainColor} mx-1 fw-bold fs-5`}>250 L.E</span> 
                                <span className='mx-1 fw-bold'><del>185 L.E</del> </span> 
                                <span className='mx-1 text-primary'>25% off</span>
                            </div>
                            
                            <p className={`${styles.mainColor} mx-1`}> More photos </p>
                            <div className='d-flex w-50'>
                                <div className={`${styles.imgProductHover}`}> <img src={homeImg4} alt="" className={`productDetailsImgs w-100 px-1`}/> </div>
                                <div className={`${styles.imgProductHover}`}> <img src={productDetailsImg} alt="" className={`productDetailsImgs w-100 px-1`} /> </div>
                                <div className={`${styles.imgProductHover}`}> <img src={homeImg2} alt="" className={`productDetailsImgs w-100 px-1`}/> </div>
                            </div>

                            <p className={`${styles.mainColor} mx-1`}> color </p>
                            <div className='d-flex'>
                                <div className={`${styles.colorChoice} p-3 mx-1`}></div>
                                <div className={`${styles.colorChoice2} p-3 mx-1`}></div>
                                <div className={`${styles.colorChoice3} p-3 mx-1`}></div>
                            </div>

                            <p className={`${styles.mainColor} mx-1 mt-3`}> Quantity </p>
                            <div>
                            <i className="fa-solid fa-circle-minus fs-3 text-muted"></i> 
                            <span className='fs-3 text-muted'> 5 </span>
                            <i class="fa-solid fa-circle-plus fs-3 text-muted"></i>
                            </div>
                        </div>
                        <div >
                         
                                <div className={`${styles.offerBorder}  my-3 bg-light p-1`}>
                                    
                                    <div >  
                                        <p className={`${styles.mainColor} me-5`}>30% <br/> off</p>
                                        <p>product name</p>
                                    </div>
                                    <div>
                                        <img src={productDetailsImg} alt="" className='w-100'/>
                                    </div>
                                </div>

                                <div className={`${styles.offerBorder}  my-3 bg-light p-1`}>
                                    
                                    <div>  
                                        <p className={`${styles.mainColor} me-5`} >30% <br /> off</p>
                                        <p>product name</p>
                                    </div>
                                    <div>
                                        <img src={productDetailsImg} alt="" className='w-100'/>
                                    </div>
                                </div>
                           
                        </div>
                        
                       
                    </div>
                </div>
            </div>
        </section>
    
    </>
  )
}

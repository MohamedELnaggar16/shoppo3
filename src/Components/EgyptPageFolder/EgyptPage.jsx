import React from 'react'
import styles from '../EgyptPageFolder/EgyptPage.module.css'
import test1 from '../Images/1.webp'
import test2 from '../Images/2.webp'
import test3 from '../Images/3.webp'
import test4 from '../Images/4.webp'
import test5 from '../Images/5.webp'
import test6 from '../Images/6.jpg'
import test7 from '../../assets/products/7.webp'
import test8 from '../../assets/products/8.webp'
import test9 from '../Images/product3.jpg'
import test11 from '../Images/product22.jpg'
import { Link } from 'react-router-dom'


export default function EgyptPage() {
  return (
   <>
     <section>
     <div className="container">
            <div className="row my-5">
            <div className={`${styles.greenColor}  fs-4 fw-bold `}>This Page In Egypt Only</div>
              <h2 className={`${styles.mainColor} text-center fs-3 mt-5`}>Savings Offers
              <div className={`${styles.orangeLine} m-auto my-3`}></div>
              </h2>

              <div className="col-md-3 my-1">
                <div className="card p-3 text-center border-0" >
                      <img src={test2} className="card-img-top " alt="..."/>
                      <div className="card-body">
                        
                          <h4 className="card-title">Product Name</h4>
                          <h5 className="card-text">price : 150 L.E</h5>
                          <span>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                          </span> 
                          <Link to='/productDetailes' >
                              <button type="button" className={`${styles.reccomendedBtnEdit} btn px-4 ms-1`} >Buy </button>
                          </Link>
                        
                      </div>
                </div>
              </div>
              <div className="col-md-3 my-1">
                <div className="card p-3 text-center border-0" >
                      <img src={test4} className="card-img-top " alt="..."/>
                      <div className="card-body">
                        
                          <h4 className="card-title">Product Name</h4>
                          <h5 className="card-text">price : 150 L.E</h5>
                          <span>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                          </span> 
                          <Link to='/productDetailes' >
                              <button type="button" className={`${styles.reccomendedBtnEdit} btn px-4 ms-1`}>Buy</button>
                          </Link>
                        
                      </div>
                </div>
              </div>
              <div className="col-md-3 my-1">
                <div className="card p-3 text-center border-0" >
                      <img src={test3} className="card-img-top " alt="..."/>
                      <div className="card-body">
                        
                          <h4 className="card-title">Product Name</h4>
                          <h5 className="card-text">price : 150 L.E</h5>
                          <span>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                          </span> 
                          <Link to='/productDetailes' >
                              <button type="button" className={`${styles.reccomendedBtnEdit} btn px-4 ms-1`}>Buy</button>
                          </Link>
                        
                      </div>
                </div>
              </div>
              <div className="col-md-3 my-1">
                <div className="card p-3 text-center border-0" >
                      <img src={test5} className="card-img-top " alt="..."/>
                      <div className="card-body">
                        
                          <h4 className="card-title">Product Name</h4>
                          <h5 className="card-text">price : 150 L.E</h5>
                          <span>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                          </span> 
                          <Link to='/productDetailes' >
                              <button type="button" className={`${styles.reccomendedBtnEdit} btn px-4 ms-1`}>Buy</button>
                          </Link>
                        
                      </div>
                </div>
              </div>
              <h2 className={`${styles.mainColor} text-center fs-3`}>Top Selling
              <div className={`${styles.orangeLine} m-auto my-3`}></div>
              </h2>

              <div className="col-md-3 my-1">
                <div className="card p-3 text-center border-0" >
                      <img src={test5} className="card-img-top " alt="..."/>
                      <div className="card-body">
                        
                          <h4 className="card-title">Product Name</h4>
                          <h5 className="card-text">price : 150 L.E</h5>
                          <span>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                          </span> 
                          <Link to='/productDetailes' >
                              <button type="button" className={`${styles.reccomendedBtnEdit} btn px-4 ms-1`}>Buy</button>
                          </Link>
                        
                      </div>
                </div>
              </div>
              <div className="col-md-3 my-1">
                <div className="card p-3 text-center border-0" >
                      <img src={test6} className="card-img-top " alt="..."/>
                      <div className="card-body">
                        
                          <h4 className="card-title">Product Name</h4>
                          <h5 className="card-text">price : 150 L.E</h5>
                          <span>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                          </span> 
                          <Link to='/productDetailes' >
                              <button type="button" className={`${styles.reccomendedBtnEdit} btn px-4 ms-1`}>Buy</button>
                          </Link>
                        
                      </div>
                </div>
              </div>
              <div className="col-md-3 my-1">
                <div className="card p-3 text-center border-0" >
                      <img src={test7} className="card-img-top " alt="..."/>
                      <div className="card-body">
                        
                          <h4 className="card-title">Product Name</h4>
                          <h5 className="card-text">price : 150 L.E</h5>
                          <span>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                          </span> 
                          <Link to='/productDetailes' >
                              <button type="button" className={`${styles.reccomendedBtnEdit} btn px-4 ms-1`}>Buy</button>
                          </Link>
                        
                      </div>
                </div>
              </div>
              <div className="col-md-3 my-1">
                <div className="card p-3 text-center border-0" >
                      <img src={test8} className="card-img-top " alt="..."/>
                      <div className="card-body">
                        
                          <h4 className="card-title">Product Name</h4>
                          <h5 className="card-text">price : 150 L.E</h5>
                          <span>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                          </span> 
                          <Link to='/productDetailes' >
                              <button type="button" className={`${styles.reccomendedBtnEdit} btn px-4 ms-1`}>Buy</button>
                          </Link>
                        
                      </div>
                </div>
              </div>
              <h2 className={`${styles.mainColor} text-center fs-3`}>Home Section
              <div className={`${styles.orangeLine} m-auto my-3`}></div>
              </h2>

              <div className="col-md-3 my-1">
                <div className="card p-3 text-center border-0" >
                      <img src={test9} className="card-img-top " alt="..."/>
                      <div className="card-body">
                        
                          <h4 className="card-title">Product Name</h4>
                          <h5 className="card-text">price : 150 L.E</h5>
                          <span>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                          </span> 
                          <Link to='/productDetailes' >
                              <button type="button" className={`${styles.reccomendedBtnEdit} btn px-4 ms-1`}>Buy</button>
                          </Link>
                        
                      </div>
                </div>
              </div>
              <div className="col-md-3 my-1">
                <div className="card p-3 text-center border-0" >
                      <img src={test1} className="card-img-top " alt="..."/>
                      <div className="card-body">
                        
                          <h4 className="card-title">Product Name</h4>
                          <h5 className="card-text">price : 150 L.E</h5>
                          <span>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                          </span> 
                          <Link to='/productDetailes' >
                              <button type="button" className={`${styles.reccomendedBtnEdit} btn px-4 ms-1`}>Buy</button>
                          </Link>
                        
                      </div>
                </div>
              </div>
              <div className="col-md-3 my-1">
                <div className="card p-3 text-center border-0" >
                      <img src={test7} className="card-img-top " alt="..."/>
                      <div className="card-body">
                        
                          <h4 className="card-title">Product Name</h4>
                          <h5 className="card-text">price : 150 L.E</h5>
                          <span>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                          </span> 
                          <Link to='/productDetailes' >
                              <button type="button" className={`${styles.reccomendedBtnEdit} btn px-4 ms-1`}>Buy</button>
                          </Link>
                        
                      </div>
                </div>
              </div>
              <div className="col-md-3 my-1">
                <div className="card p-3 text-center border-0" >
                      <img src={test11} className="card-img-top " alt="..."/>
                      <div className="card-body">
                        
                          <h4 className="card-title">Product Name</h4>
                          <h5 className="card-text">price : 150 L.E</h5>
                          <span>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                          </span> 
                          <Link to='/productDetailes' >
                              <button type="button" className={`${styles.reccomendedBtnEdit} btn px-4 ms-1`}>Buy</button>
                          </Link>
                        
                      </div>
                </div>
              </div>
              <h2 className={`${styles.mainColor} text-center fs-3`}>Kids Section
              <div className={`${styles.orangeLine} m-auto my-3`}></div>
              </h2>

              <div className="col-md-3 my-1">
                <div className="card p-3 text-center border-0" >
                      <img src={test9} className="card-img-top " alt="..."/>
                      <div className="card-body">
                        
                          <h4 className="card-title">Product Name</h4>
                          <h5 className="card-text">price : 150 L.E</h5>
                          <span>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                          </span> 
                          <Link to='/productDetailes' >
                              <button type="button" className={`${styles.reccomendedBtnEdit} btn px-4 ms-1`}>Buy</button>
                          </Link>
                        
                      </div>
                </div>
              </div>
              <div className="col-md-3 my-1">
                <div className="card p-3 text-center border-0" >
                      <img src={test6} className="card-img-top " alt="..."/>
                      <div className="card-body">
                        
                          <h4 className="card-title">Product Name</h4>
                          <h5 className="card-text">price : 150 L.E</h5>
                          <span>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                          </span> 
                          <Link to='/productDetailes' >
                              <button type="button" className={`${styles.reccomendedBtnEdit} btn px-4 ms-1`}>Buy</button>
                          </Link>
                        
                      </div>
                </div>
              </div>
              <div className="col-md-3 my-1">
                <div className="card p-3 text-center border-0" >
                      <img src={test11} className="card-img-top " alt="..."/>
                      <div className="card-body">
                        
                          <h4 className="card-title">Product Name</h4>
                          <h5 className="card-text">price : 150 L.E</h5>
                          <span>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                          </span> 
                          <Link to='/productDetailes' >
                              <button type="button" className={`${styles.reccomendedBtnEdit} btn px-4 ms-1`}>Buy</button>
                          </Link>
                        
                      </div>
                </div>
              </div>
              <div className="col-md-3 my-1">
                <div className="card p-3 text-center border-0" >
                      <img src={test8} className="card-img-top " alt="..."/>
                      <div className="card-body">
                        
                          <h4 className="card-title">Product Name</h4>
                          <h5 className="card-text">price : 150 L.E</h5>
                          <span>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                          </span> 
                          <Link to='/productDetailes' >
                              <button type="button" className={`${styles.reccomendedBtnEdit} btn px-4 ms-1`}>Buy</button>
                          </Link>
                        
                      </div>
                </div>
              </div>
              <h2 className={`${styles.mainColor} text-center fs-3`}>Beauty & Health Section
              <div className={`${styles.orangeLine} m-auto my-3`}></div>
              </h2>

              <div className="col-md-3 my-1">
                <div className="card p-3 text-center border-0" >
                      <img src={test5} className="card-img-top " alt="..."/>
                      <div className="card-body">
                        
                          <h4 className="card-title">Product Name</h4>
                          <h5 className="card-text">price : 150 L.E</h5>
                          <span>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                          </span> 
                          <Link to='/productDetailes' >
                              <button type="button" className={`${styles.reccomendedBtnEdit} btn px-4 ms-1`}>Buy</button>
                          </Link>
                        
                      </div>
                </div>
              </div>
              <div className="col-md-3 my-1">
                <div className="card p-3 text-center border-0" >
                      <img src={test6} className="card-img-top " alt="..."/>
                      <div className="card-body">
                        
                          <h4 className="card-title">Product Name</h4>
                          <h5 className="card-text">price : 150 L.E</h5>
                          <span>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                          </span> 
                          <Link to='/productDetailes' >
                              <button type="button" className={`${styles.reccomendedBtnEdit} btn px-4 ms-1`}>Buy</button>
                          </Link>
                        
                      </div>
                </div>
              </div>
              <div className="col-md-3 my-1">
                <div className="card p-3 text-center border-0" >
                      <img src={test7} className="card-img-top " alt="..."/>
                      <div className="card-body">
                        
                          <h4 className="card-title">Product Name</h4>
                          <h5 className="card-text">price : 150 L.E</h5>
                          <span>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                          </span> 
                          <Link to='/productDetailes' >
                              <button type="button" className={`${styles.reccomendedBtnEdit} btn px-4 ms-1`}>Buy</button>
                          </Link>
                        
                      </div>
                </div>
              </div>
              <div className="col-md-3 my-1">
                <div className="card p-3 text-center border-0" >
                      <img src={test8} className="card-img-top " alt="..."/>
                      <div className="card-body">
                        
                          <h4 className="card-title">Product Name</h4>
                          <h5 className="card-text">price : 150 L.E</h5>
                          <span>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                          </span> 
                          <Link to='/productDetailes' >
                              <button type="button" className={`${styles.reccomendedBtnEdit} btn px-4 ms-1`}>Buy</button>
                          </Link>
                        
                      </div>
                </div>
              </div>
              <h2 className={`${styles.mainColor} text-center fs-3`}>Accessorize Section
              <div className={`${styles.orangeLine} m-auto my-3`}></div>
              </h2>

              <div className="col-md-3 my-1">
                <div className="card p-3 text-center border-0" >
                      <img src={test5} className="card-img-top " alt="..."/>
                      <div className="card-body">
                        
                          <h4 className="card-title">Product Name</h4>
                          <h5 className="card-text">price : 150 L.E</h5>
                          <span>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                          </span> 
                          <Link to='/productDetailes' >
                              <button type="button" className={`${styles.reccomendedBtnEdit} btn px-4 ms-1`}>Buy</button>
                          </Link>
                        
                      </div>
                </div>
              </div>
              <div className="col-md-3 my-1">
                <div className="card p-3 text-center border-0" >
                      <img src={test6} className="card-img-top " alt="..."/>
                      <div className="card-body">
                        
                          <h4 className="card-title">Product Name</h4>
                          <h5 className="card-text">price : 150 L.E</h5>
                          <span>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                          </span> 
                          <Link to='/productDetailes' >
                              <button type="button" className={`${styles.reccomendedBtnEdit} btn px-4 ms-1`}>Buy</button>
                          </Link>
                        
                      </div>
                </div>
              </div>
              <div className="col-md-3 my-1">
                <div className="card p-3 text-center border-0" >
                      <img src={test7} className="card-img-top " alt="..."/>
                      <div className="card-body">
                        
                          <h4 className="card-title">Product Name</h4>
                          <h5 className="card-text">price : 150 L.E</h5>
                          <span>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                          </span> 
                          <Link to='/productDetailes' >
                              <button type="button" className={`${styles.reccomendedBtnEdit} btn px-4 ms-1`}>Buy</button>
                          </Link>
                        
                      </div>
                </div>
              </div>
              <div className="col-md-3 my-1">
                <div className="card p-3 text-center border-0" >
                      <img src={test8} className="card-img-top " alt="..."/>
                      <div className="card-body">
                        
                          <h4 className="card-title">Product Name</h4>
                          <h5 className="card-text">price : 150 L.E</h5>
                          <span>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                          </span> 
                          <Link to='/productDetailes' >
                              <button type="button" className={`${styles.reccomendedBtnEdit} btn px-4 ms-1`}>Buy</button>
                          </Link>
                        
                      </div>
                </div>
              </div>
              
            </div>
            </div>

     </section>
  </>
  )
}

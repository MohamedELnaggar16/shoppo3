import React from 'react'
import styles from '../HomePageFolder/HomePage.module.css'
import homeImg2 from '../Images/product3.jpg'
import homeImg3 from '../Images/product22.jpg'
import homeImg4 from '../Images/product33.jpg'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/shop-context'
import { useContext } from 'react'
import test1 from '../Images/1.webp'
import test2 from '../Images/2.webp'
import test3 from '../Images/3.webp'
import test4 from '../Images/4.webp'
import test5 from '../Images/5.webp'
import test6 from '../Images/6.jpg'
import test7 from '../../assets/products/7.webp'
import test8 from '../../assets/products/8.webp'





export default function HomePage() {

  const { addToCartNotification } = useContext(ShopContext);
  return (
    <>
   
        <header>
           {/* part one */}
           <div className={`${styles.homePageBg} py-5`}>
              <div className="container py-5">
                            <div className='py-5'>
                                    <h2 className={` fw-bold  ms-5 mt-5`}> Discovery And Shop <br/> The Trend</h2>
                                    <p className={` fw-bold ms-5`}>You Will Find Everything <br /> You Are Looking For</p>
                                    <button type="button" className={`${styles.homeBtnEdit} btn px-4  ms-5`}>Shop Now </button>                          
                            </div>
              </div>
           </div>
           {/* part two */}
           <div className="container-fluid my-3">
              <div className="row">
                <div className="col-md-12 ">
                <ul className={`${styles.subNavBgColorAndFram} nav p-2 d-flex justify-content-center align-items-center`}>
           
                  <li className="nav-item dropdown">
                      <Link className={`${styles.subNavColor} nav-link dropdown-toggle fw-bold`} data-bs-toggle="dropdown"  role="button" aria-expanded="false">Home & Furniture</Link>
                      <ul className="dropdown-menu">
                      <li><Link className={`${styles.subNavColor} dropdown-item`} >Action</Link></li>
                      <li><Link className={`${styles.subNavColor} dropdown-item`} >Another action</Link></li>
                      </ul>
                  </li>
                  <li className="nav-item dropdown">
                      <Link className={`${styles.subNavColor} nav-link dropdown-toggle fw-bold`}  data-bs-toggle="dropdown"  role="button" aria-expanded="false">Kitchen</Link>
                      <ul class="dropdown-menu">
                      <li><Link className={`${styles.subNavColor} dropdown-item`} >Action</Link></li>
                      <li><Link className={`${styles.subNavColor} dropdown-item`} >Another action</Link></li>
                      </ul>
                  </li>
                  <li className="nav-item dropdown">
                      <Link className={`${styles.subNavColor} nav-link dropdown-toggle fw-bold`}  data-bs-toggle="dropdown"  role="button" aria-expanded="false">Books</Link>
                      <ul class="dropdown-menu">
                      <li><Link className={`${styles.subNavColor} dropdown-item`} >Action</Link></li>
                      <li><Link className={`${styles.subNavColor} dropdown-item`} >Another action</Link></li>
                      </ul>
                  </li>
                  <li className="nav-item dropdown">
                      <Link className={`${styles.subNavColor} nav-link dropdown-toggle fw-bold `}  data-bs-toggle="dropdown"  role="button" aria-expanded="false">Sport</Link>
                      <ul class="dropdown-menu">
                      <li><Link className={`${styles.subNavColor} dropdown-item`} >Action</Link></li>
                      <li><Link className={`${styles.subNavColor} dropdown-item`} >Another action</Link></li>
                      </ul>
                  </li>
                  <li className="nav-item dropdown">
                      <Link className={`${styles.subNavColor} nav-link dropdown-toggle fw-bold `}  data-bs-toggle="dropdown"  role="button" aria-expanded="false">Toys & Games</Link>
                      <ul class="dropdown-menu">
                      <li><Link className={`${styles.subNavColor} dropdown-item`} >Action</Link></li>
                      <li><Link className={`${styles.subNavColor} dropdown-item`} >Another action</Link></li>
                      </ul>
                  </li>
                  <li className="nav-item dropdown">
                      <Link className={`${styles.subNavColor} nav-link dropdown-toggle fw-bold `}  data-bs-toggle="dropdown"  role="button" aria-expanded="false">Health & Beauty</Link>
                      <ul class="dropdown-menu">
                      <li><Link className={`${styles.subNavColor} dropdown-item`} >Action</Link></li>
                      <li><Link className={`${styles.subNavColor} dropdown-item`} >Another action</Link></li>
                      </ul>
                  </li>
                  <li className="nav-item dropdown">
                      <Link className={`${styles.subNavColor} nav-link dropdown-toggle fw-bold `}  data-bs-toggle="dropdown"  role="button" aria-expanded="false">Clothes</Link>
                      <ul class="dropdown-menu">
                      <li><Link className={`${styles.subNavColor} dropdown-item`} >Action</Link></li>
                      <li><Link className={`${styles.subNavColor} dropdown-item`} >Another action</Link></li>
                      </ul>
                  </li>
                  <li className="nav-item dropdown">
                      <Link className={`${styles.subNavColor} nav-link dropdown-toggle fw-bold `}  data-bs-toggle="dropdown"  role="button" aria-expanded="false">Phone And Computer</Link>
                      <ul class="dropdown-menu">
                      <li><Link className={`${styles.subNavColor} dropdown-item`} >Action</Link></li>
                      <li><Link className={`${styles.subNavColor} dropdown-item`} >Another action</Link></li>
                      </ul>
                  </li>
                  <li className="nav-item dropdown">
                      <Link className={`${styles.subNavColor} nav-link dropdown-toggle fw-bold `}  data-bs-toggle="dropdown"  role="button" aria-expanded="false">TV And Electronics</Link>
                      <ul class="dropdown-menu">
                      <li><Link className={`${styles.subNavColor} dropdown-item`} >Action</Link></li>
                      <li><Link className={`${styles.subNavColor} dropdown-item`} >Another action</Link></li>
                      </ul>
                  </li>
                </ul>
              </div>
              </div>
              <div className="row my-3">
                  <div className="col-md-8 m-auto">
                  <input type="search" className={`${styles.homeSearchEdit} form-control shadow-none p-2 w-75 m-auto`} placeholder='search products'/>
                  </div>
              </div>
           </div>
           {/* part three */}
           <div className={`${styles.BG} container-fluid my-1`}>
            <div className="row">
              <div className="col-md-9 m-auto">
              <div className={` row p-3`}>
                <div className="col-md-6 d-flex align-items-center justify-content-center my-2">
                  <h2 className={`${styles.greenColor} fw-bold fs-1`}>Trend Best <br /> Seller Products</h2>
                </div>
                <div className="col-md-6 my-3">
                  <div className='text-center'>
                    <img src={homeImg2} alt="" className={`${styles.imgRoundedEdit} w-75`}/>
                  </div>
                   
                </div>
                
              
                <div className="col-md-6 my-3">
                  <div className='text-center'>
                    <img src={homeImg2} alt="" className={`${styles.imgRoundedEdit} w-75`}/>
                  </div>
                   
                </div>
                <div className="col-md-6 d-flex align-items-center my-2">
                  <div>
                  <p className={`${styles.greenColor} fw-bold fs-4`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, soluta dolore maiores eius similique veniam ad eum provident cumque aperiam. </p>
                  <div className='text-center'>
                    <button type="button" className={`${styles.homeBtnEdit2} btn px-4 mt-3 fs-5`}>See All Products <i className="fa-solid fa-circle-chevron-right text-white fs-4"></i> </button>
                  </div>
                 
                  </div>
                  
                </div>

                
               

              </div>
              </div>
            </div>
           </div>
           {/* part four */}
           <div className={`${styles.leftLine} text-center fs-2 fw-bold position-relative my-3`}> <span className={`${styles.textBetTwoLines} px-2`}>Top Seller</span> </div>
           {/* part five */}
            <div className="container my-1">
            <div className="row">
                <div className="col-md-6 ">
                    <div className='position-relative'>
                        <img src={homeImg3} alt="" className={`${styles.trendImgEdit1} pt-2`}/>
                        <div className={`${styles.PositionForTopSeller1} p-4 text-white fs-1 fw-bold text-center`}> product name </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className='position-relative'>
                        <img src={homeImg4} alt="" className={`${styles.trendImgEdit2} pt-2`}/>
                        <div className={`${styles.PositionForTopSeller2} p-1 text-white fs-3 fw-bold text-center`}> product name</div>
                    </div>
                    <div className='position-relative'>
                        <img src={homeImg4} alt="" className={`${styles.trendImgEdit2} pt-2`}/>
                        <div className={`${styles.PositionForTopSeller2} p-1 text-white fs-3 fw-bold text-center`}> product name</div>
                    </div>
                </div>
            </div>
         </div>
            {/* part six */}
            <div className={`${styles.leftLine} text-center fs-2 fw-bold position-relative my-4`}> <span className={`${styles.textBetTwoLines} px-2`}>Recommended For You </span> </div>
            {/* part seven */}
            <div className="container my-1">
            <div className="row">
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
                              <button type="button" className={`${styles.reccomendedBtnEdit} btn px-4 ms-1`} >Buy </button>
                          </Link>
                        
                      </div>
                </div>
              </div>
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
              <div className='w-75 m-auto text-center'>
                <button type="button" className={`${styles.homeBtnEdit2} btn px-4 mt-1 fs-5`}>See All Products <i className="fa-solid fa-circle-chevron-right text-white fs-4"></i> </button>
              </div>
            
            </div>
            </div>
            {/* part eight */}
            <div className={`${styles.BG} container my-5 p-1`}>
              <div className={`text-center fs-1 fw-bold  my-3`}> <span className={`${styles.text2} px-4 p-1`}>Sale Products </span> </div>
              <div className="row">
              <div className="col-md-3 my-1">
                <div className="p-3 text-center border-0" >
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
                          <button type="button" className={`${styles.reccomendedBtnEdit} btn px-4 ms-1`} onClick={addToCartNotification}>Buy</button>
                      </div>
                </div>
              </div>
              <div className="col-md-3 my-1">
                <div className=" p-3 text-center border-0" >
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
                          <button type="button" className={`${styles.reccomendedBtnEdit} btn px-4 ms-1`}>Buy</button>
                      </div>
                </div>
              </div>
              <div className="col-md-3 my-1">
                <div className=" p-3 text-center border-0" >
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
                          <button type="button" className={`${styles.reccomendedBtnEdit} btn px-4 ms-1`}>Buy</button>
                      </div>
                </div>
              </div>
              <div className="col-md-3 my-1">
                <div className=" p-3 text-center border-0" >
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
                          <button type="button" className={`${styles.reccomendedBtnEdit} btn px-4 ms-1`}>Buy</button>
                      </div>
                </div>
              </div>
              
              </div>

            </div>

           

        </header>
        <section>
        </section>
    </>
  )
}

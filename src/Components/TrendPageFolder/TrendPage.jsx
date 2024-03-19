import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../TrendPageFolder/TrendPage.module.css'
import trendImg1 from '../Images/product3.jpg'
import trendImg2 from '../Images/product4.jpg'
import trendImg3 from '../Images/product22.jpg'
// import axios from 'axios'

export default function TrendPage() {

    // const [trendProducts, setTrendProducts] = useState([]);
  
//    async function Trending( ){
    // let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaTypeShow}/week?api_key=f1aca93e54807386df3f6972a5c33b50`);
    // let {data} = await axios.get(`https://api.rainforestapi.com/request?api_key=04B74C02A7964EF68BCADAACF33AA7BD&type=bestsellers&amazon_domain=amazon.co.uk&category_id=bestsellers_appliances`);
    // setTrendProducts(data.bestsellers)
    // console.log(data.bestsellers)
    // }
    //  useEffect(() => {
    //     Trending();
  
    //  }, [])
//    }
  return ( 
    <>
 
    <section>
          {/* part one */}
    <div className="container-fluid">
           <div className={`${styles.trendPageBg} py-5`}>
                <div className="container py-5">
                    <div className='py-5'>
                         <h2 className={`${styles.mainColor} fw-bold fs-1 ms-5 mt-5`}> Trend Product <br/> On Shoppo3</h2>                                               
                    </div>
              </div>
           </div>
            <div className="row">
                <div className="col-md-12">
                <ul className={`${styles.subNavBgColorAndFram} nav justify-content-center my-3 p-2 w-50 m-auto`}>
                <li className="nav-item">
                    <Link className={`${styles.subNavColor} nav-link active fw-bold fs-5`} aria-current="page" >Top Selling</Link>
                </li>
                <li class="nav-item">
                    <Link className={`${styles.subNavColor} nav-link active fw-bold fs-5`}>Feedback</Link>
                </li>
                <li className="nav-item dropdown">
                    <Link className={`${styles.subNavColor} nav-link dropdown-toggle fw-bold fs-5`} data-bs-toggle="dropdown"  role="button" aria-expanded="false">Products</Link>
                    <ul className="dropdown-menu">
                    <li><Link className={`${styles.subNavColor} dropdown-item`} >Action</Link></li>
                    <li><Link className={`${styles.subNavColor} dropdown-item`} >Another action</Link></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <Link className={`${styles.subNavColor} nav-link dropdown-toggle fw-bold fs-5`}  data-bs-toggle="dropdown"  role="button" aria-expanded="false">Sale items</Link>
                    <ul class="dropdown-menu">
                    <li><Link className={`${styles.subNavColor} dropdown-item`} >Action</Link></li>
                    <li><Link className={`${styles.subNavColor} dropdown-item`} >Another action</Link></li>
                    </ul>
                </li>
            </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className='position-relative'>
                      <img src={trendImg2} alt="" className='w-100'/>
                      <div className='position-absolute top-50 start-0 translate-middle-y'>
                        <h2 className={`fw-bold fs-1 ms-5 ps-5`}> <span className='text-black'>Save Up</span> <br/> <span className='text-success fs-1'>30 %</span> OFF</h2>
                    </div>
                    </div>
                    
                </div>
            </div>
         </div> 
           {/* part two */}

         <div className="container">
             <div className="row mt-2">
               <div className="col-md-4 my-2">
               <div className="card p-2 text-center" >
                    <img src={trendImg3} className="card-img-top w-100" alt="..."/>
                    <div className="card-body">
                        <span>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </span>
                        <div className="fw-bold">Product Name</div>
                        <div> egyprion cottrn</div>
                        <div >over size</div>
                        <div > egyprion cottrn over size</div>
                        <div >price : 150 L.E</div>
                        <button type="button" className={`${styles.trendBtnEdit} btn px-4`}>Buy</button>
                    </div>
               </div>
               </div>
               <div className="col-md-4 my-2">
               <div className="card p-2 text-center" >
                    <img src={trendImg3} className="card-img-top w-100" alt="..."/>
                    <div className="card-body">
                        <span>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </span>
                        <div className="fw-bold">Product Name</div>
                        <div> egyprion cottrn</div>
                        <div >over size</div>
                        <div > egyprion cottrn over size</div>
                        <div >price : 150 L.E</div>
                        <button type="button" className={`${styles.trendBtnEdit} btn px-4`}>Buy</button>
                    </div>
               </div>
               </div>
               <div className="col-md-4 my-2">
               <div className="card p-2 text-center" >
                    <img src={trendImg3} className="card-img-top w-100" alt="..."/>
                    <div className="card-body">
                        <span>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </span>
                        <div className="fw-bold">Product Name</div>
                        <div> egyprion cottrn</div>
                        <div >over size</div>
                        <div > egyprion cottrn over size</div>
                        <div >price : 150 L.E</div>
                        <button type="button" className={`${styles.trendBtnEdit} btn px-4`}>Buy</button>
                    </div>
               </div>
               </div>
               <div className="col-md-4 my-2">
               <div className="card p-2 text-center" >
                    <img src={trendImg3} className="card-img-top w-100" alt="..."/>
                    <div className="card-body">
                        <span>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </span>
                        <div className="fw-bold">Product Name</div>
                        <div> egyprion cottrn</div>
                        <div >over size</div>
                        <div > egyprion cottrn over size</div>
                        <div >price : 150 L.E</div>
                        <button type="button" className={`${styles.trendBtnEdit} btn px-4`}>Buy</button>
                    </div>
               </div>
               </div>
               <div className="col-md-4 my-2">
               <div className="card p-2 text-center" >
                    <img src={trendImg3} className="card-img-top w-100" alt="..."/>
                    <div className="card-body">
                        <span>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </span>
                        <div className="fw-bold">Product Name</div>
                        <div> egyprion cottrn</div>
                        <div >over size</div>
                        <div > egyprion cottrn over size</div>
                        <div >price : 150 L.E</div>
                        <button type="button" className={`${styles.trendBtnEdit} btn px-4`}>Buy</button>
                    </div>
               </div>
               </div>
               <div className="col-md-4 my-2">
               <div className="card p-2 text-center" >
                    <img src={trendImg3} className="card-img-top w-100" alt="..."/>
                    <div className="card-body">
                        <span>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </span>
                        <div className="fw-bold">Product Name</div>
                        <div> egyprion cottrn</div>
                        <div >over size</div>
                        <div > egyprion cottrn over size</div>
                        <div >price : 150 L.E</div>
                        <button type="button" className={`${styles.trendBtnEdit} btn px-4`}>Buy</button>
                    </div>
               </div>
               </div>
               <div className="col-md-4 my-2">
               <div className="card p-2 text-center" >
                    <img src={trendImg3} className="card-img-top w-100" alt="..."/>
                    <div className="card-body">
                        <span>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </span>
                        <div className="fw-bold">Product Name</div>
                        <div> egyprion cottrn</div>
                        <div >over size</div>
                        <div > egyprion cottrn over size</div>
                        <div >price : 150 L.E</div>
                        <button type="button" className={`${styles.trendBtnEdit} btn px-4`}>Buy</button>
                    </div>
               </div>
               </div>
               <div className="col-md-4 my-2">
               <div className="card p-2 text-center" >
                    <img src={trendImg3} className="card-img-top w-100" alt="..."/>
                    <div className="card-body">
                        <span>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </span>
                        <div className="fw-bold">Product Name</div>
                        <div> egyprion cottrn</div>
                        <div >over size</div>
                        <div > egyprion cottrn over size</div>
                        <div >price : 150 L.E</div>
                        <button type="button" className={`${styles.trendBtnEdit} btn px-4`}>Buy</button>
                    </div>
               </div>
               </div>
               <div className="col-md-4 my-2">
               <div className="card p-2 text-center" >
                    <img src={trendImg3} className="card-img-top w-100" alt="..."/>
                    <div className="card-body">
                        <span>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </span>
                        <div className="fw-bold">Product Name</div>
                        <div> egyprion cottrn</div>
                        <div >over size</div>
                        <div > egyprion cottrn over size</div>
                        <div >price : 150 L.E</div>
                        <button type="button" className={`${styles.trendBtnEdit} btn px-4`}>Buy</button>
                    </div>
               </div>
               </div>
             </div>
             

         </div> 

{/* 
         <div className="container my-5">
            <div className="row">
            {trendProducts.map((products , i)=> <div key={i} className='col-md-3'>  
                <h2>{products.title}</h2>
                <h3>{products.rating}</h3>
      </div>)}
            </div>
         </div>    */}

        

           {/* part three */}
<div className="container">
            <div className="row">
                <div className="col-md-6 ">
                    <div className='position-relative'>
                        <img src={trendImg1} alt="" className={`${styles.trendImgEdit1} pt-2`}/>
                        <div className={`${styles.PositionForTrendImgs} p-4 text-white fs-1 fw-bold text-center`}> product name </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className='position-relative'>
                        <img src={trendImg1} alt="" className={`${styles.trendImgEdit2} pt-2`}/>
                        <div className={`${styles.PositionForTrendImgs2} p-1 text-white fs-3 fw-bold text-center`}> product name</div>
                    </div>
                    <div className='position-relative'>
                        <img src={trendImg1} alt="" className={`${styles.trendImgEdit2} pt-2`}/>
                        <div className={`${styles.PositionForTrendImgs2} p-1 text-white fs-3 fw-bold text-center`}> product name</div>
                    </div>
                </div>
            </div>
         </div> 
           {/* part four */}
        <div className="container my-5 ">
            <div className="row ">
                <div className="col-md-12 m-auto d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                    <ul className={`pagination my-5 `}>
                        <li className="page-item"><Link className={`${styles.mainColor} page-link`} >Previous</Link></li>
                        <li className="page-item"><Link className={`${styles.mainColor} page-link`} >1</Link></li>
                        <li className="page-item"><Link className={`${styles.mainColor} page-link`} >2</Link></li>
                        <li className="page-item"><Link className={`${styles.mainColor} page-link`} >3</Link></li>
                        <li className="page-item"><Link className={`${styles.mainColor} page-link`} >4</Link></li>
                        <li className="page-item"><Link className={`${styles.mainColor} page-link`} >Next</Link></li>
                    </ul>
                </nav>
                </div>
            </div>
         </div> 
    </section>
    </>
  )
}

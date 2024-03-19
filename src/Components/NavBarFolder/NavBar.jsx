import React from "react";
import styles from '../NavBarFolder/NavBar.module.css';
import logo from '../Images/logo.png';
import {Link} from 'react-router-dom';
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";





export default function NavBar() {

  const {cartCount} = useContext(ShopContext);

  return (

   <>
   <nav className={`${styles.navBgColor} navbar navbar-expand-lg fixed-top`} >
      <div className="container p-1 ">
           <img src={logo} alt="" className='w-25'/>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className= "collapse navbar-collapse" id="navbarSupportedContent" >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className={`${styles.hoverColor} nav-link active  fs-5 mx-1`} aria-current="page" to={'home'}>HOME</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`${styles.hoverColor} nav-link active  fs-5 mx-1`} aria-current="page" to={'trend'}>TREND</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`${styles.hoverColor} nav-link active  fs-5 mx-1`} aria-current="page" to={'aboutUs'}>ABOUT</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`${styles.hoverColor} nav-link active  fs-5 mx-1`} aria-current="page" to={'contactUS'}>CONTACT US</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`${styles.hoverColor} nav-link active  fs-5 mx-1`} aria-current="page" to={'shop'}>Shop Test</Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link className={`${styles.subNavColor} nav-link dropdown-toggle fw-bold`} data-bs-toggle="dropdown"  role="button" aria-expanded="false"><i className={`${styles.hoverColor} fa-sharp fa-regular fa-user fs-3 mx-2`} aria-current="page" ></i></Link>
                      <ul className="dropdown-menu">
                          <li>
                            <Link className={`${styles.hoverColor} nav-link active ms-1`} aria-current="page" to={'login'}>Login</Link>
                          </li>
                          <li>
                            <Link className={`${styles.hoverColor} nav-link active ms-1`} aria-current="page" to={'register'}>Register</Link>
                          </li>
                      </ul>
                  </li>

                    <li className="nav-item d-flex align-items-center "> 
                  
                        <Link  className={` active fw-bold text-black position-relative`} aria-current="page" to={'cart'}>
                           <i className={`${styles.hoverColor} fa-solid fa-basket-shopping fs-3 mx-2`} aria-current="page" ></i>
                          {cartCount > 0 ? <> <span className={`${styles.cartNotification} position-absolute top-50 start-50 text-center`}> 
                          {cartCount}               
                          </span></>: <><span className={`${styles.cartNotification} position-absolute top-50 start-50 text-center d-none`}> 
                          {cartCount}     
                          </span></>}
                        </Link>                   
                    </li>
                  
                </ul>
            </div>
      </div>

  </nav> 
   
   </>
  )
}


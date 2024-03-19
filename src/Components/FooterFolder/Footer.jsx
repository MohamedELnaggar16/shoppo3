import React from 'react'
import logo from '../Images/logo white.png'
import styles from '../FooterFolder/Footer.module.css'

export default function Footer() {
  return (
   <>
   <footer className={`${styles.footerBG} pt-4`}>
        <div className="container-fluid">
            <div className="row align-items-center text-center">
                  
                    <div className='col-md-6 leftSideFooter'>
                        <div>
                          <img src={logo} alt="" className='w-25' />
                        </div>
                        <div className='socialMedia my-3'>
                        <i className="fa-brands fa-facebook me-4 fs-2 text-white"></i>
                        <i className="fa-brands fa-instagram mx-4 fs-2 text-white"></i>
                        <i className="fa-brands fa-tiktok mx-4 fs-2 text-white"></i>
                        <i className="fa-brands fa-snapchat ms-4 fs-2 text-white"></i>
                        </div>
                        
                    </div>
                    <div className="col-md-6 rightSideFooter">
                     
                             <p><i className="fa-solid fa-phone fs-2 text-white"></i> <span className='fs-4 mx-3 text-white'>01177823467</span></p> 
                             <p><i className="fa-solid fa-envelope fs-2 text-white"></i> <span className='fs-4 mx-3 text-white'>info@shoppo3.com</span></p>
                      
                    </div>
                    <div className={`${styles.whiteLine}`}></div>
                    <div className='my-3 text-white fs-5'>
                    <i className="fa-regular fa-copyright"></i> Shoppo3 2023. All Rights Reserved | Powered By Meccano
                    </div>
            </div>
        </div>
   </footer>
   
   </>
  )
}

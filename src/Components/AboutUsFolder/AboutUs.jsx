import React from 'react'
import styles from '../AboutUsFolder/AboutUs.module.css'
import aboutImg from '../Images/about.jpg'

function AboutUs() {
  return (
    <>
        <section>
            {/* part one */}
            <div className={`${styles.aboutPageBg} py-5`}>
                <div className="container py-5">
                    <div className='py-5'>
                         <h2 className={`${styles.greenColor} fw-bold fs-1 ms-5 mt-5`}> About Us </h2>                                               
                    </div>
              </div>
           </div>
            {/* part two */}
            <div className="container my-5 p-5">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center">
                        <div>  <img src={aboutImg} alt="" className='w-100'/> </div>
                       
                    </div>
                    <div className="col-md-6">
                        <p>Welcome to Shoppo3, your Ultimate shopping Experience</p>
                        <p>Our mission is to provide a seamless and hassle-free experience for our customers, offering a wide range of products at competitive prices. We take pride in sourcing high-quality products from reliable suppliers all around the world, so you can trust us to deliver the best products at affordable prices.</p>
                        <p>At Shoppo3, we believe in creating a community of customers who share a passion for shopping and finding great deals. That's why we've designed our website to be user-friendly and intuitive, with a wide variety of products to choose from</p>
                        <p>Whether you're a seasoned shopper or just starting out, we're here to help you find what you need. Our team of dedicated customer service representatives are available around the clock to answer any questions you may have, so you can shop with confidence knowing that you're in good hands.</p>
                        <p>Thank you for choosing Shoppo3, and we hope to be your go-to destination for all your dropshipping needs!</p>
                        <div className='text-center my-2'>  <button type="button" className={`${styles.aboutBtnEdit} btn px-4 fw-bold`}>CONTACT US </button> </div>
                    </div>
                </div>
            </div>
            {/* part three */}
            <div className="container my-4">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-3 my-3">
                        <div className={`${styles.aboutIconsPosition} pt-5 text-center position-relative p-2`}>
                            <h5>Trend</h5>
                            <p className='text-muted'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse laborum assumenda ex fugiat et Lorem, ipsum.</p>
                            <div className={`${styles.iconsBorder} position-absolute top-0 start-50 translate-middle p-2`}>
                                <i className="fa-solid fa-arrow-trend-up fs-1"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-3">
                        <div className={`${styles.aboutIconsPosition} pt-5 text-center position-relative p-2`}>
                            <h5>All Products</h5>
                            <p className='text-muted'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse laborum assumenda ex fugiat et Lorem, ipsum.</p>
                            <div className={`${styles.iconsBorder} position-absolute top-0 start-50 translate-middle p-2`}>
                                 <i className="fa-solid fa-box fs-1"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-3">
                        <div className={`${styles.aboutIconsPosition} pt-5 text-center position-relative p-2`}>
                            <h5>All Offers</h5>
                            <p className='text-muted'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse laborum assumenda ex fugiat et Lorem, ipsum.</p>
                            <div className={`${styles.iconsBorder} position-absolute top-0 start-50 translate-middle p-2`}>
                               <i className="fa-solid fa-arrow-trend-down fs-1"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        {/* <div class="text-center fs-1 text-white position-absolute top-0 start-50 translate-middle"> <i class="fa-solid fa-angle-up"></i> </div> */}
    
    
    </>
  )
}

export default AboutUs

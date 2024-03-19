import React from 'react'
import styles from '../ContactUsFolder/ContactUs.module.css'
import speakerImg from '../Images/speaker.jpg'


export default function ContactUS() {
  return (
   <>
   <section>
             {/* part one */}
            <div className={`${styles.contactUSPageBg} py-5 `}>
                            <div className={`container py-5 `}>
                                <div className='py-5'>
                                    <h2 className={`${styles.greenColor} fw-bold fs-1 ms-5 mt-5 text-white`}> Contact Us </h2>                                               
                                </div>
                        </div>
            </div>
            {/* part two */}
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className='d-flex align-items-center '>
                            <img src={speakerImg} alt="" className='w-100'/>
                        </div>
                    </div>
                    <div className="col-md-6 text-center ">
                        <form action="" >
                            <div className='d-flex justify-content-between '>
                                <div className=''> <input type="text" className='form-control my-2 px-4' placeholder='first name'/></div>
                                <div className=''> <input type="text" className='form-control my-2 px-4' placeholder='last name'/></div>
                            </div>
                            <input type="email" className='form-control my-2' placeholder='email'/>
                            <input type="number" className='form-control my-2' placeholder='phone'/>
                            <textarea name="" id="" cols="30" rows="7" className='form-control' placeholder='your message'></textarea>
                            <button type="button" className={`${styles.contactUsBtnEdit} btn px-4 ms-1 my-2 `}>SEND</button>
                            

                        </form>
                        
                    </div>
                </div>
            </div>
            {/* part three */}
            <div className="container my-5 pt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-3 my-3">
                        <div className={`${styles.contactUsIconsPosition} pt-5 text-center position-relative p-2`}>
                            <h5>Trend</h5>
                            <p className='text-muted'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse laborum assumenda ex fugiat et Lorem, ipsum.</p>
                            <div className={`${styles.iconsBorder} position-absolute top-0 start-50 translate-middle p-2`}>
                                <i className="fa-solid fa-arrow-trend-up fs-1"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-3">
                        <div className={`${styles.contactUsIconsPosition} pt-5 text-center position-relative p-2`}>
                            <h5>All Products</h5>
                            <p className='text-muted'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse laborum assumenda ex fugiat et Lorem, ipsum.</p>
                            <div className={`${styles.iconsBorder} position-absolute top-0 start-50 translate-middle p-2`}>
                             <i className="fa-solid fa-box fs-1"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-3">
                        <div className={`${styles.contactUsIconsPosition} pt-5 text-center position-relative p-2`}>
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

   
   </>
  )
}

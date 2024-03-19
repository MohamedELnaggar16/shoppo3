import styles from '../SignFolder/Signing.module.css'
import Axios from 'axios';
import Joi from 'joi';
import React from 'react';
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';


export default function SignUp() 
{    
      let navigate= useNavigate(); 

      const [btnLoading, setBtnLoading] = useState(false)
      const [errorsList, seterrorsList] = useState([]);
      const [error, seterror] = useState('');
      const [user, setuser] = useState({

        first_name:'',
        last_name:'',
        email:'',
        password:'',
      });

    function getUserData(e) 
    {
    let myUser= {...user};
    myUser[e.target.name] = e.target.value;
    setuser(myUser);
    console.log(myUser)
    }

    async function submitRegister (e)
    { 
      e.preventDefault()
      setBtnLoading(true);

       let validationResult = validationRegisterForm ()
       
        if(validationResult.error) 
          {
        
            seterrorsList(validationResult.error.details)
             setBtnLoading(false);
            
          }
          else
          { 
            
            let {data} = await Axios.post('https://routeegypt.herokuapp.com/signup', user);
      
      
            if( data.message === 'success')
            {
                 setBtnLoading(false);
                navigate('/login')
            }
            else {
                   
                    seterror(data.message) 
                    setBtnLoading(false);
            }
          }
        
    
        }
      
        function validationRegisterForm (){
          let scheme = Joi.object({

            first_name: Joi.string().alphanum().min(3).max(10).required(),
            last_name: Joi.string().alphanum().min(3).max(10).required(),
            email: Joi.string().email({minDomainSegments : 2 , tlds:{allow : [ 'com', 'net']}}).required(),
            password: Joi.string().pattern(new RegExp("^[A-Za-z]{3,8}[0-9]{0,8}$")).required(),

          })
          return scheme.validate(user , {abortEarly:false}); 
        }
      return (
        <>

        <div className='w-50 m-auto my-5 py-5'>

        <h2 className='my-5'> Register Now </h2>
        <form onSubmit={submitRegister}> 

        { errorsList.map((errors,index)=> index===3? <div className='alert alert-danger' key={index}> password invalid </div> : <div className='alert alert-danger' key={index}> {errors.message} </div>)}
        { error.length > 0 ?  <div className='alert alert-danger'> {error} </div> : '' }

        <label htmlFor="first_name"> First Name:</label>
        <input onChange={getUserData} type="text"  className={`${styles.signBorderColor} form-control mb-2 shadow-none`} id='first_name' name='first_name'/>

        <label htmlFor="last_name"> Last Name:</label>
        <input onChange={getUserData} type="text"  className={`${styles.signBorderColor} form-control mb-2 shadow-none`} id='last_name' name='last_name'/>

        <label htmlFor="email"> Email:</label>
        <input onChange={getUserData} type="email"  className={`${styles.signBorderColor} form-control mb-2 shadow-none`} id='email' name='email'/>

        <label htmlFor="password"> Password:</label>
        <input onChange={getUserData} type="password"  className={`${styles.signBorderColor} form-control mb-2 shadow-none`} id='password' name='password'/>
         
       

        <button type='submit' className={`${styles.registerBtnEdit} btn px-4 fw-bold`}> 
        {btnLoading === true ? <i className='fas fa-spinner fa-spin'> </i> : 'Register'}
        </button>
       

        </form>
        
        </div>
        
        
        
        </>
      )
}
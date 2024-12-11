
import React, { useState } from 'react'
import Logo from './asset/logo1.png'
import { Button } from 'react-bootstrap'

const Registeration = () => {

  const [email, setEmail] = useState(" ");
  const [message, setMessage] = useState(" ");

  const emailValidation = () => {
    const regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if (regEx.test(email)) {
      setMessage("Email is Valid")
    }else if(email === "") {
      setMessage("Please Enter Email Id")
    }else if (!regEx.test(email) && email !== " ") {
      setMessage("Enter Valid Email Id")
    }else {
      setMessage("")
    }

  };
  const handleOnchange = (e) => {
    setEmail(e.target.value)
  };



  return (
    <div className="container d-flex flex-column align-items-center ">
        <div className="logo">
          <img src={Logo} alt="" style={{width:"64px"}} />
        </div>
        <div className="head" style={{fontFamily:"Bogle - 400"}}>
          <span className=' fw-medium fs-4' >Sign in or create your account</span>
          <span className='d-flex flex-column align-items-center mt-3'>
            <p className='m-0 p-0'>Not sure if you have an account?</p>
            <p>Enter your email and we’ll check for you.</p>
          </span>

        </div>
        <div className="input d-flex flex-column">
          <p className='fw-bold m-0'>Email Address </p>
          <form onSubmit={emailValidation} className='d-flex flex-column'>
            <input type="email" className='p-2' />
            <p>{message}</p>
            <Button className='mt-4 rounded-pill' type='email' onClick={handleOnchange}>Continue</Button>
            
          </form>
          <p className='mt-4 m-0'>Securing your personal information is our priority.</p>
          <a href="#" className='m-0 mb-3 text-black'>See our privacy measures.</a>
        </div>
    </div>
  )
}

export default Registeration;
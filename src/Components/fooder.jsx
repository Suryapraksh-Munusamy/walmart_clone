import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";

const fooder = () => {
  return (
    <div className=' end-0 d-flex flex-column align-items-center justify-content-center'>
        <div className='d-flex flex-column text-center p-5 footerst align-items-center w-100 ' style={{backgroundColor:'#e6f1fc'}}>
            <div><p>We'd love to hear what you think!</p></div>
            <button className=' border-black rounded-pill ' style={{width:"150px"}}>Give Feedback</button>
        </div>
        <div  className='d-flex flex-row flex-wrap m-0 p-0 gap-4 align-items-center justify-content-center ' style={{ backgroundColor:"#004f9a",textAlign:'center',height:'100px',fontSize:'1em' }}>

            <div><a href="#"   className='text-white text-decoration-none ' style={{fontSize:'0.8em'}}>All Departments</a></div>
            <div><a href="#"   className='text-white text-decoration-none ' style={{fontSize:'0.8em'}}>Store Directory</a></div> 
            <div><a href="#"   className='text-white text-decoration-none ' style={{fontSize:'0.8em'}}>Careers</a></div>
            <div><a href="#"   className='text-white text-decoration-none ' style={{fontSize:'0.8em'}}>Our Company</a></div>
            <div><a href="#"   className='text-white text-decoration-none ' style={{fontSize:'0.8em'}}>Sell on Walmart.com </a></div>
            <div><a href="#"   className='text-white text-decoration-none ' style={{fontSize:'0.8em'}}>Help</a></div>           
            <div><a href="#"   className='text-white text-decoration-none d-none d-md-flex' style={{fontSize:'0.8em'}}>COVID-19 Vaccine Scheduler</a></div>
            <div><a href="#"   className='text-white text-decoration-none d-none d-md-flex' style={{fontSize:'0.8em'}}>Product Recalls</a></div>
            <div><a href="#"   className='text-white text-decoration-none d-none d-md-flex' style={{fontSize:'0.8em'}}>Accessibility</a></div>
            <div><a href="#"   className='text-white text-decoration-none d-none d-md-flex' style={{fontSize:'0.8em'}}>Tax Exempt Program</a></div>
            <div><a href="#"   className='text-white text-decoration-none d-none d-md-flex' style={{fontSize:'0.8em'}}>Get the Walmart App</a></div>
            <div><a href="#"   className='text-white text-decoration-none d-none d-md-flex' style={{fontSize:'0.8em'}}>Sign-up for Email</a></div>
            <div><a href="#"   className='text-white text-decoration-none d-none d-md-flex' style={{fontSize:'0.8em'}}>Safety Data Sheet</a></div>
            <div><a href="#"   className='text-white text-decoration-none d-none d-md-flex' style={{fontSize:'0.8em'}}>Termsof Use</a></div> 
            <div><a href="#"   className='text-white text-decoration-none d-none d-md-flex' style={{fontSize:'0.8em'}}>Privacy & Security</a></div>
            <div><a href="#"   className='text-white text-decoration-none d-none d-md-flex' style={{fontSize:'0.8em'}}>CA Privacy Rights</a></div>
            <div><a href="#"   className='text-white text-decoration-none d-none d-md-flex' style={{fontSize:'0.8em'}}>California Supply Chain Act</a></div>
            <div><a href="#"   className='text-white text-decoration-none d-none d-md-flex' style={{fontSize:'0.8em'}}>Privacy choices iconYour Privacy Choices</a></div>
            <div><a href="#"   className='text-white text-decoration-none d-none d-md-flex' style={{fontSize:'0.8em'}}>Notice at Collection</a></div>
            <div><a href="#"   className='text-white text-decoration-none d-none d-md-flex' style={{fontSize:'0.8em'}}>Request My Personal Information</a></div>
            <div><a href="#"   className='text-white text-decoration-none d-none d-md-flex' style={{fontSize:'0.8em'}}>#IYWYK</a></div>
        </div>




        <div style={{backgroundColor:"#004f9a"}} className='text-white  w-100 text-center m-0 p-3'>
            <span className=''>© 2023 Walmart. All Rights Reserved.</span>
        </div>
    </div>
  )
}

export default fooder;




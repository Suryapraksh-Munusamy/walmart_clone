import React from 'react'
import { BrowserRouter, Link, useLocation } from 'react-router-dom'
import logo from "../Components/asset/logo.png"
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import { GoSearch} from 'react-icons/go';
import CartDropdown from './dropdown/CartDD';
import DepartmentDropdown from './dropdown/Department-dropdown';
import ServicesDropdown from './dropdown/servicesDd';
import MyItemsDropdown from './dropdown/myitemdd';
import AccDropdown from './dropdown/Account';
import LocationDropdown from './dropdown/location';
import { FormControl } from 'react-bootstrap';
import { CartState } from "../context/Context";
import products from './Data/Products';



const Navbar = () => {
  const {
    state: { searchQuery },
    productDispatch,
  } = CartState();



  return (

    <div className=' position-sticky top-0 fixed-top'>
      <div className='   custom-bg text-white d-flex p-1 align-items-center  '>
        {/* left */}
        <div className=" d-flex p-2 align-items-center gap-4   ">
          <Link to="/"><img src={logo} alt="" className="hover-dark rounded-pill"  /></Link>
          <DepartmentDropdown />
          <ServicesDropdown />
        </div>
        {/* middle */}
        <div className='d-flex text-black position-relative flex-fill   '>
          <FormControl type="search" 
            className='rounded-pill border-1 border-light  w-100 p-2' 
            placeholder='Search everything at Walmart online and in store'
            aria-label="Search"
            onChange={(e) => {
              productDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              });
            }}
          />
          <div className=' position-absolute m-2 end-0 '  id='ylow'> <GoSearch  className='m-1'/></div>
        </div>
        {/* right */}
        <div className='d-flex p-2 gap-4 align-items-center  '>
          <MyItemsDropdown />
          <AccDropdown />
          <CartDropdown />  
        </div>
      </div>
      <hr  className='m-0'/>
      {/* info */}
      <div className='d-flex bd-highlight mb-3 custom-bg text-white m-0'>
        {/* location */}
        <div className='d-flex gap-3 smfont me-auto p-2 bd-highlight justify-content-start m-0 '>
          <LocationDropdown  className='m-0 p-0'/>
        <p className='d-none d-lg-block'>Erode, 638456</p>
        <p className='d-none d-lg-block'>Sacramento Supercenter</p>
        </div>
        {/* deal */}
        <div className='smfont d-flex  p-2 bd-highlight align-items-end gap-2 justify-content-end text-white d-none d-xl-flex '>
          <p><a href="#"  className='text-white'  id=' hoveff'>Deals</a></p>
          <p><a href="#"  className='text-white'  id=' hoveff'>Grocery & Essentials</a></p>
          <p><a href="#"  className='text-white'  id=' hoveff'>Summer Shop</a></p>
          <p><a href="#"  className='text-white'  id=' hoveff'>Ice Cream Day</a></p>
          <p><a href="#"  className='text-white'  id=' hoveff'>Back to School</a></p>
          <p><a href="#"  className='text-white'  id=' hoveff'>Barbie</a></p>
          <p><a href="#"  className='text-white'  id=' hoveff'>Fashion</a></p>
          <p><a href="#"  className='text-white'  id=' hoveff'>Home</a></p>
          <p><a href="#"  className='text-white'  id=' hoveff'>Electronics</a></p>
          <p><a href="#"  className='text-white'  id=' hoveff'>Registry</a></p>
          <p><a href="#"  className='text-white '  id=' hoveff'>Walmart+</a></p>
        </div>
      </div>
    </div>

  ) 
}

export default Navbar
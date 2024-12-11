import React from 'react';
import { BsHeart } from 'react-icons/bs';
import '../style.css'

function Card({ photo, title, subtitle, price}) {
  return (
    <div className="  product-slider bg-white rounded d-flex position-relative flex-column " style={{width:'200px',height:'350px'}}>
      
      <img src={photo} alt={title} className=' object-fit-contain p-2'style={{width:'250px',height:'250px'}}/>
      <div className='d-flex flex-row-reverse position-absolute rounded-4 end-0 mt-3 bg-white align-items-center justify-content-center pink' style={{width:"32px",height:"32px"}}><BsHeart   style={{width:"25px",height:"25px" }}/></div>
      <div className="card-content p-3  ">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <span>{price}</span>
      </div>
      
    </div>
  );
}

export default Card;

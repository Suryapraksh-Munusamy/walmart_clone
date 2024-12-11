import React from 'react';

function Card2({ photo, title, subtitle, price }) {
  return (
    <div className="  product-slider bg-white rounded " style={{width:'200px',height:'350px'}}>
      <img src={photo} alt={title} className=' object-fit-cover p-2'style={{width:'150px',height:'150px'}}/>
      <div className="card-content p-3">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <span>{price}</span>
      </div>
    </div>
  );
}

export default Card2;

import React from 'react';

function Card3({ photo, title }) {
  return (
    <div className="  product-slider bg-white rounded " style={{width:'150px',height:'150px'}}>
      <img src={photo} alt={title} className=' object-fit-cover p-2'style={{width:'100px',height:'100px'}}/>
      <div className="card-content p-3">
        <p className="fs-6 text-center">{title}</p>
      </div>
    </div>
  );
}

export default Card3;

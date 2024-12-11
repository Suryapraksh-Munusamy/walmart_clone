import React, { useRef } from 'react';
import Card from '../Cards/card.jsx';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import '../index.css';
import Product from '../Data/Products.jsx'; 
import { Link } from 'react-router-dom';

function Carousel() {

  const carouselRef = useRef(null);

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 400;
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 400;
    }
  };

  return (
    <div className="container position-relative">
      <div className='d-flex m-0 p-0' >
        <div className='d-flex flex-column flex-fill '>
          <div className='fs-bold fs-4'>Weekly deals</div>
          <div className=' fw-light'>Upto 65% off</div>
        </div>
        <div className='d-flex align-items-center justify-content-center'>
          <Link to='/Shopping-page'>View All</Link>
        </div>
      </div>

      <div className="product position-relative">
        <div id='content' ref={carouselRef} className="d-flex flex-row align-items-center justify-content-start overflow-x-auto overflow-y-hidden overflow-scroll gap-4 p-4">
          {Product.map((product, id) => (
            <Card
              key={id}
              photo={product.photo}
              title={product.title}
              subtitle={product.subtitle}
              price={product.price}
            />
          ))}
        </div>
        <div className='position-absolute top-50  d-flex justify-content-between m-0 w-100 '>
          <button onClick={scrollLeft} 
            className='p-2 m-2 rounded-circle bg-white  d-flex  align-items-start justify-content-start ' 
            style={{left:0}}>
              <FiChevronLeft />
          </button>
          <button onClick={scrollRight} 
            className='p-2 m-2 rounded-circle bg-white d-flex  align-items-end justify-content-end  ms-auto'
            style={{right:0}}>
              <FiChevronRight />
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Carousel;

import React, { useRef } from 'react';
import Card2 from '../Cards/card2.jsx';
import { FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import '../index.css';
import Products3 from '../Data/products3.jsx'


function Carousel4() {


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
    <div className=" container position-relative ">

      <div className="product position-relative" >
        <div id='content' ref={carouselRef} className=" d-flex flex-row  align-items-center justify-content-start overflow-x-auto overflow-y-hidden overflow-scroll  gap-4 p-4">
          {Products3.map((Products3, id) => (
            <Card2
              key={id}
              photo={Products3.photo}
              title={Products3.title}
              subtitle={Products3.subtitle}
              price={Products3.price}
              
            />
          ))}
        </div>
        <div className='position-absolute top-50  d-flex justify-content-between m-0 w-100 h-auto'>
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

export default Carousel4;
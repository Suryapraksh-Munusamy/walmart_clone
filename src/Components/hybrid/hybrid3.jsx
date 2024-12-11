import React, { useRef } from 'react';
import Card3 from '../Cards/card3.jsx';
import { FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import '../index.css';
import laptop from "../asset/body/19.jpg";
import chair from "../asset/sec/1.jpg";
import ball from "../asset/sec/2.jpg";
import can from "../asset/sec/3.jpg";
import can2 from "../asset/sec/4.jpg";
import dress from "../asset/sec/5.jpg";
import tyre from "../asset/sec/6.jpg";
import bottle from "../asset/sec/7.jpg";
import can3 from "../asset/sec/8.jpg";
import seat from "../asset/sec/9.jpg";
import seat2 from "../asset/sec/10.jpg";

function Hybrid3() {
  const cards = [
    { photo: laptop, title: 'Electronics' },
    { photo: chair, title: 'Home' },
    { photo: ball, title: 'Sports' },
    { photo: can, title: 'toy' },
    { photo: can2, title: 'Grocery' },
    { photo: dress, title: 'Fashion' },
    { photo: tyre, title: 'tyres' },
    { photo: bottle, title: 'Health' },
    { photo: can3, title: 'Household' },
    { photo: seat, title: 'Baby' },
    { photo: seat2, title: 'chair' },

  ];

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
      <div className='d-flex m-0 p-0' >
        <div className='d-flex flex-column flex-fill '>
          <div className='fs-bold fs-4'>Get it all right here</div>
        </div>
        <div className='d-flex align-items-center justify-content-center'>
          <a href="#">View All</a>
        </div>
      </div>

      <div className="product position-relative" >
        <div id='content' ref={carouselRef} className=" d-flex flex-row  align-items-center justify-content-start overflow-x-auto overflow-y-hidden overflow-scroll  gap-4 p-4">
          {cards.map((card, index) => (
            <Card3
              key={index}
              photo={card.photo}
              title={card.title}
              
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

export default Hybrid3;
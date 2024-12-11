import React from 'react';
import Carousel4 from '../carousel/carousel4';
import girls from '../asset/body/18.jpg';

const hybrid2 = () => {
  return (
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <Carousel4 />
                </div>
                <div class="col-sm-6 mt-2 ">
                    <div className='d-flex flex-wrap position-relative'>
                        <img src={girls} alt=""  className='rounded w-100 h-auto cover-fill position-relative' />
                        <section  className='d-flex flex-wrap justify-content-start align-items-start position-absolute mt-2 p-2' >
                            <p  className='w-100 fw-medium fs-2'>Set up camp</p>
                            <a href="#"><span>Shop Now</span></a>
                        </section>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default hybrid2;
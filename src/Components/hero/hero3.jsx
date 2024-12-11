import React from 'react'
import car from '../asset/body/7.jpg'
import brush from '../asset/body/10.jpg'
import doll from '../asset/body/9.jpg'
import bike from '../asset/body/8.jpg'
import bath from '../asset/body/4.jpg'



const hero3 = () => {
  return (
    <div class="container">
        <div class="row">
            <div class="col-sm-5">
                <div className='d-flex flex-wrap position-relative'>
                    <img src={car} className='rounded w-100 h-100 cover-fill position-relative' />
                    <section  className='d-flex flex-wrap justify-content-start align-items-start position-absolute mt-2 p-2' >
                        <p  className='w-100 fw-medium fs-2'>Fast fun, priced right</p>
                        <a href="#"><span>Shop Now</span></a>
                    </section>
                </div>
            </div>
            <div class="col-sm-4 d-flex flex-column gap-2">
                <div className='d-flex flex-wrap position-relative'>
                    <img src={brush} alt="" className='rounded w-100 h-100 cover-fill position-relative'  />
                    <section  className='d-flex flex-wrap justify-content-start align-items-start position-absolute mt-2 p-2' >
                        <p  className='w-100 fw-medium fs-2'>Arts & crafts for kids</p>
                        <a href="#"><span>Shop Now</span></a>
                    </section>
                </div>
                <div className='d-flex flex-row gap-2'>
                    <div className='d-flex flex-wrap position-relative'>
                        <img src={doll} alt="" className='rounded w-100 h-100 cover-fill position-relative' />
                        <section  className='d-flex flex-wrap justify-content-start align-items-start position-absolute mt-2 p-2' >
                            <p  className='w-100 fw-medium fs-5'>Barbie land</p>
                            <a href="#"><span>Shop Now</span></a>
                        </section>
                    </div>
                    <div className='d-flex flex-wrap position-relative'>
                        <img src={bike} alt="" className='rounded w-100 h-100 cover-fill position-relative'  />
                        <section  className='d-flex flex-wrap justify-content-start align-items-start position-absolute mt-2 p-2' >
                            <p  className='w-100 fw-medium fs-5'>scooters from $25</p>
                            <a href="#"><span>Shop Now</span></a>
                    </section>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div className='d-flex flex-wrap position-relative'>
                    <img src={bath} alt="" className='rounded w-100 h-100 cover-fill position-relative'  />
                    <section  className='d-flex flex-wrap justify-content-start align-items-start position-absolute mt-2 p-2' >
                            <p  className='w-100 fw-medium fs-3 '>Ready,Set,Play!</p>
                            <a href="#"><span>Shop Now</span></a>
                    </section>
                </div>
            </div>
        </div>
    </div>
  )
}

export default hero3
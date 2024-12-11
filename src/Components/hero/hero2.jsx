import React from 'react'
import map from '../asset/body/5.jpg'
import machie from '../asset/body/2.jpg'
import box from '../asset/body/1.jpg'
import ball from '../asset/body/3.jpg'
import boy from '../asset/body/11.jpg'


const hero2 = () => {
  return (
    <div class="container">
        <div class="row">
            <div class="col-sm-5">
                <div className='d-flex flex-wrap position-relative'>
                    <img src={map} className='rounded w-100 h-100 cover-fill position-relative' />
                    <section  className='d-flex flex-wrap justify-content-start align-items-start position-absolute mt-2 p-2' >
                        <p  className='w-100 fw-medium fs-2'>Set up camp</p>
                        <a href="#"><span>Shop Now</span></a>
                    </section>
                </div>
            </div>
            <div class="col-sm-4 d-flex flex-column gap-2">
                <div className='d-flex flex-wrap position-relative'>
                    <img src={machie} alt="" className='rounded w-100 h-100 cover-fill position-relative'  />
                    <section  className='d-flex flex-wrap justify-content-start align-items-start position-absolute mt-2 p-2' >
                        <p  className='w-100 fw-medium fs-2'>Get hooked, starting at $17</p>
                        <a href="#"><span>Shop Now</span></a>
                    </section>
                </div>
                <div className='d-flex flex-row gap-2'>
                    <div className='d-flex flex-wrap position-relative'>
                        <img src={box} alt="" className='rounded w-100 h-100 cover-fill position-relative' />
                        <section  className='d-flex flex-wrap justify-content-start align-items-start position-absolute mt-2 p-2' >
                            <p  className='w-100 fw-medium fs-5'>Chill on the go</p>
                            <a href="#"><span>Shop Now</span></a>
                        </section>
                    </div>
                    <div className='d-flex flex-wrap position-relative'>
                        <img src={ball} alt="" className='rounded w-100 h-100 cover-fill position-relative'  />
                        <section  className='d-flex flex-wrap justify-content-start align-items-start position-absolute mt-2 p-2' >
                            <p  className='w-100 fw-medium fs-5'>Play like a pro</p>
                            <a href="#"><span>Shop Now</span></a>
                    </section>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div className='d-flex flex-wrap position-relative'>
                    <img src={boy} alt="" className='rounded w-100 h-100 cover-fill position-relative'  />
                    <section  className='d-flex flex-wrap justify-content-start align-items-start position-absolute mt-2 p-2' >
                            <p  className='w-100 fw-medium fs-3 text-white'>Ready,Set,Play!</p>
                            <a href="#"><span>Shop Now</span></a>
                    </section>
                </div>
            </div>
        </div>
    </div>
  )
}

export default hero2
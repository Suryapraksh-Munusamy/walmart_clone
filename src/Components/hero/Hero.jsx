import React from 'react'
import book from '../asset/main/book.jpg'
// import dress from '../asset/main/dress.jpg'
// import dress1 from '../asset/main/dress1.jpg'
import table from '../asset/main/table.jpg'
import football from '../asset/main/footbal.jpg'
import banner from '../asset/main/banner.jpg'
import pot from '../asset/main/pot.jpg'
import ear from '../asset/main/earphone.jpg'
import bag from '../asset/main/bag1.jpg'
import week from '../asset/main/weekly.jpg'
import dress2 from '../asset/tamanna.jpg'
import dress3 from '..//asset//rajini.jpg'


const Hero = () => {

  return (

    <div class="container ">
      <div class="row">
          <div class="col-sm-3 gap-2 d-flex flex-column ">
            <div className='d-flex flex-wrap  position-relative '>
              <img src={book} alt=""   className='w-100 h-100 cover-fill rounded  position-relative' />
              <section className='d-flex flex-wrap justify-content-start align-items-start position-absolute mt-2 p-2'>
                <p className='w-100 fw-medium fs-3 text-wrap'>School supplies from 25$</p>
                <a href="#" className=''><span>Shop now</span></a>
              </section>
            </div>
            <div className='d-flex flex-wrap  position-relative '>
              <img src={dress3} alt="" className='w-100 h-100  rounded' />
              <section className='d-flex flex-wrap justify-content-start align-items-start position-absolute mt-2 p-2'>
                <p className='w-100 fw-medium fs-3 text-white text-wrap'>Traditional Styles for less</p>
                <a href="#" className='text-white'><span>Festival Fashion</span></a>
              </section>
            </div>
            <div className='d-flex flex-wrap  position-relative '>
              <img src={bag} alt=""    className='w-100 h-100 cover-fill rounded' />
              <section className='d-flex flex-wrap justify-content-start align-items-start position-absolute mt-2 p-2'>
                <p className='w-100 fw-medium fs-3text-wrap'>Leader of bags</p>
                <a href="#" className=''><span className='text-wrap'>School kids Backbags</span></a>
              </section>
            </div>
          </div>
          <div class="col-sm-6 gap-2 d-flex flex-column  ">
            <div className='d-flex flex-wrap  position-relative '>
              <img src={table} alt="" className=' rounded w-100 h-100'/>
              <section className='d-flex flex-wrap justify-content-start align-items-start position-absolute mt-2 p-2'>
                <p className='w-100 fs-5 text-wrap'>Delivary as fast as today</p>
                <p className='w-100  fs-1 text-wrap'>College prep</p>
                <a href="#" className=' bg-white p-2 border-black rounded-pill text-decoration-none text-black'><span >Shop now</span></a>
              </section>
            </div>
            <div className='d-flex  gap-4'> 
              <div  className='d-flex flex-wrap  position-relative '>
                <img src={football} alt="" className='rounded w-100 h-100 ' />
                <section className='d-flex flex-wrap justify-content-start align-items-start position-absolute mt-2 p-2'>
                  <p className='w-100 fw-bold text-white fs-3 text-wrap'>Sports equipment FTW</p>
                  <a href="#" className=''><span className='text-white '>Shop now</span></a>
                </section>
              </div>
              <div  className='d-flex'>
                <img src={week} alt="" className='rounded w-100 h-100 ' />
                <section className='d-flex flex-wrap justify-content-start align-items-start position-absolute mt-2 p-2'>
                  <p className='w-100 fw-bold fs-2'>Up to 65%</p>
                  <a href="#" className=''><span>Shop now</span></a>
                </section>
              </div>
            </div>
            
            <div className='d-flex flex-wrap position-relative  '>
              <img src={banner} alt="" className='rounded w-100 h-100'/>
              <section className='d-flex flex-column flex-wrap justify-content-start align-items-start position-absolute mt-2 p-2'>
                <p className='w-75 fw-medium fs-3 text-wrap'>Members Get free shipping with no order minimum!</p>
                <a href="#" className=''><span>Join Walmart+</span></a>
              </section>
              
            </div>
                
          </div>
          <div class="col-sm-3 d-flex flex-column gap-2">
            <div className='d-flex flex-wrap position-relative'>
              <img src={pot} alt=""   className='w-100 h-100 cover-fill rounded'/>
              <section className='d-flex flex-wrap justify-content-start align-items-start position-absolute mt-2 p-2'>
                <p className='w-100 fw-medium fs-3'>Dorm room chic</p>
                <a href="#" className=''><span>Shop now</span></a>
              </section>
            </div>
            <div className='d-flex flex-wrap position-relative'>
              <img src={ear} alt=""   className='w-100 h-100 cover-fill rounded'/>
              <section className='d-flex flex-wrap justify-content-start align-items-start position-absolute mt-2 p-2'>
                <p className='w-100 fw-medium fs-3 text-wrap'>Tech for the semester from 10$</p>
                <a href="#" className=''><span>Shop now</span></a>
              </section>
            </div>
            <div className='d-flex flex-wrap position-relative'>
              <img src={dress2} alt="" className='w-100 h-100 cover-fill rounded'/>
              <section className='d-flex flex-wrap position-absolute align-items-center justify-content-center   p-2' style={{margin:'250px 0px 0px 30px '}}>
                <p className='w-100 m-0 fw-medium fs-2  text-white '>Cultural looks</p>
                <a href="#" className='text-white text-decoration-none'><span>Shop now</span></a>
              </section>
            </div>
          </div>
      </div>
    </div>

  )
}

export default Hero
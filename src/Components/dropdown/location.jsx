import Dropdown from 'react-bootstrap/Dropdown';
import Truck from '../asset/location/truck.png';
import Car from '../asset/location/car.png';
import Bag from '../asset/location/bag.png';
import {TfiLocationPin} from 'react-icons/tfi'
import { Button } from 'react-bootstrap';

function LocationDD() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant=" " id="dropdown-basic" className='d-flex gap-3 smfont me-auto p-2 bd-highlight justify-content-start m-0 text-white'>
        <TfiLocationPin className='d-flex m-0 p-0 fs-5'/>
        <p className=' icon-link-hover'>How do you want your items?  | </p>
      </Dropdown.Toggle>

      <Dropdown.Menu className='' style={{backgroundColor: "#337be7"}}>
        <Dropdown.Item href="#/action-1" className='d-flex fs-6 gap-3 p-5 align-items-center justify-content-center' >
            <img src={Truck} alt=""  className=' ' style={{height:64,width:64}}/>
            <img src={Car} alt="" style={{height:64,width:64}} />
            <img src={Bag} alt="" style={{height:64,width:64}}/>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2" className='d-flex flex-column bg-white rounded mx-2 my-2 ' style={{width:350}} >
          <p style={{fontSize:'0.9em'}}>Add an address for shipping and delivary</p>
          <p style={{fontSize:'0.9em'}}>Erode,638455</p>
          <Button variant='primary'className='d-flex flex-fill text-center align-items-center justify-content-center text-white rounded-pill'>Add address</Button>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3" className='bg-white rounded m-2 ' style={{width:350}}>
          <p>Sacramento Supercenter,</p>
          <p>Erode Dt, 638455</p>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LocationDD;
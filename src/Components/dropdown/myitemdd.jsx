import Dropdown from 'react-bootstrap/Dropdown';
import { BsGift } from "react-icons/bs";
import {AiOutlineHeart} from 'react-icons/ai';
import {CiInboxIn} from 'react-icons/ci';


function MyItemsDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant=" " id="dropdown-basic" className='d-flex align-items-center d-none d-lg-flex gap-2 hover-dark rounded-pill p-2 text-white' >
        <AiOutlineHeart className='fs-4' />
        <div className=''>
            <p className='m-0 p-0 smfont'>Recorder</p>
            <p className='m-0 p-0 fw-semibold'>My Items</p>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" className='d-flex gap-2 align-items-center'>
            <CiInboxIn />
            Recorder
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2" className='d-flex gap-2 align-items-center'>
            <AiOutlineHeart />
            Lists
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3" className='d-flex gap-2 align-items-center'>
            <BsGift />
            Registeries
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default MyItemsDropdown;
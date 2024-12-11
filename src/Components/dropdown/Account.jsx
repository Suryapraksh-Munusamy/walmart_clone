import { Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import {ImFileText2} from 'react-icons/im';
import {TbBrandWalmart} from 'react-icons/tb';
import {CiUser} from 'react-icons/ci';
import register from '../registeration'
import { Link } from 'react-router-dom';


function MyItemsDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant=" " id="dropdown-basic" className='  align-items-center gap-1 d-none d-md-flex gap-2 hover-dark rounded-pill p-2 text-white ' >
        <CiUser  className='fs-4 fw-bolder'/>
        <div className=''>
          <p className='p-0 m-0 smfont'><a href={register}>Signin</a></p>
          <p className='p-0 m-0 fw-semibold text-white'>Account</p>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" className='d-flex gap-2 align-items-center'>
          <Link to="/Signin" >
            <Button variant="primary"> Sign in </Button>
          </Link>
          <Link to="/Register" >
            <Button variant="primary"> Create Account</Button>
          </Link>
        </Dropdown.Item>
        <hr />
        <Dropdown.Item href="#/action-2" className='d-flex gap-2 align-items-center'>
            <ImFileText2 />
            Purchase History
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3" className='d-flex gap-2 align-items-center'>
            <TbBrandWalmart />
            Walmart+
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default MyItemsDropdown;
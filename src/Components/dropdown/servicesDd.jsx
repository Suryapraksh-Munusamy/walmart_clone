import Dropdown from 'react-bootstrap/Dropdown';
import { HiViewGrid} from 'react-icons/hi';

function DepartmentDd() {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant=""
        id="dropdown-basic"
        className='d-flex d-none d-lg-flex align-items-center gap-2 hidden hover-dark rounded-pill p-2 text-white'
      >
        <HiViewGrid/>
        <p className='m-0 fw-semibold '>Services</p>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1"> All Services</Dropdown.Item>
        <Dropdown.Item href="#/action-2"> Auto Care Center Services</Dropdown.Item>
        <Dropdown.Item href="#/action-3"> Pharmacy </Dropdown.Item>
        <Dropdown.Item href="#/action-4"> Health & Wellness </Dropdown.Item>
        <Dropdown.Item href="#/action-5"> Registry, Lists, & Gifts</Dropdown.Item>
        <Dropdown.Item href="#/action-6"> Custom Cakes</Dropdown.Item>
        <Dropdown.Item href="#/action-7"> Photo Services</Dropdown.Item>
        <Dropdown.Item href="#/action-8"> Financial Services</Dropdown.Item>
        <Dropdown.Item href="#/action-9"> Protection, Home, & Tech</Dropdown.Item>
        <Dropdown.Item href="#/action-10">Community & Giving</Dropdown.Item>
        <Dropdown.Item href="#/action-11">Ordering Online</Dropdown.Item>
        <Dropdown.Item href="#/action-12">Get Inspired</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
  )
};

export default DepartmentDd;



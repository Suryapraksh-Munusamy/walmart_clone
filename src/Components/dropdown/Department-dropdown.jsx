import Dropdown from 'react-bootstrap/Dropdown';
import { TfiLayoutGrid2Alt } from 'react-icons/tfi';

function DepartmentDd() {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant=""
        id="dropdown-basic"
        className='d-md-flex d-none d-md-block align-items-center justify-content-center gap-2 hover-dark   rounded-pill p-2 text-white' 
      >
        <TfiLayoutGrid2Alt className='d-flex' />
        <p className=' m-0  fw-semibold '>Departments</p>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" className='fw-bold'>All Departments</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Deals</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Back to School</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Dorm Room Essentials</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Fall Shop</Dropdown.Item>
        <Dropdown.Item href="#/action-6">Grocery</Dropdown.Item>
        <Dropdown.Item href="#/action-7">Clothing, Shoes & Accessories</Dropdown.Item>
        <Dropdown.Item href="#/action-8">Home, Furniture & Appliances</Dropdown.Item>
        <Dropdown.Item href="#/action-9">Electronics</Dropdown.Item>
        <Dropdown.Item href="#/action-10">Patio & Garden</Dropdown.Item>
        <Dropdown.Item href="#/action-11">Auto & Tires</Dropdown.Item>
        <Dropdown.Item href="#/action-12">Baby</Dropdown.Item>
        <Dropdown.Item href="#/action-13">Kids</Dropdown.Item>
        <Dropdown.Item href="#/action-14">Pets</Dropdown.Item>
        <Dropdown.Item href="#/action-15">Toys & Video Games</Dropdown.Item>
        <Dropdown.Item href="#/action-16">Sports & Outdoors</Dropdown.Item>
        <Dropdown.Item href="#/action-17">Beauty</Dropdown.Item>
        <Dropdown.Item href="#/action-18">Personal Care</Dropdown.Item>
        <Dropdown.Item href="#/action-19">Pharmacy, Health & Wellness</Dropdown.Item>
        <Dropdown.Item href="#/action-20">Household Essentials</Dropdown.Item>
        <Dropdown.Item href="#/action-21">Home Improvement</Dropdown.Item>
        <Dropdown.Item href="#/action-22">Office & School Supplies</Dropdown.Item>
        <Dropdown.Item href="#/action-23">Arts, Crafts & Sewing</Dropdown.Item>
        <Dropdown.Item href="#/action-24">Seasonal Decor & Party</Dropdown.Item>
        <Dropdown.Item href="#/action-25">Supplies</Dropdown.Item>
        <Dropdown.Item href="#/action-26">Movies, Music & Books</Dropdown.Item>
        <Dropdown.Item href="#/action-27">Gift Cards</Dropdown.Item>
        <Dropdown.Item href="#/action-28">Shop With Purpose</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DepartmentDd;

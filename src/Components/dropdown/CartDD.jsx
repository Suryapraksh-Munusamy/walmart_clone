import React from 'react';
import { CgShoppingCart } from 'react-icons/cg';
import { Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { CartState } from '../../context/Context'; 
import "../style.css"
import { AiFillDelete } from 'react-icons/ai';

function CartDropdown() {
  const { state } = CartState(); 
  const cartItemCount = state.cart.reduce((total, item) => total + item.qty, 0);
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <Dropdown>
      <Dropdown.Toggle variant=" " id="dropdown-basic" className='d-flex align-items-center position-relative hover-dark rounded-pill text-white p-2'>
        <CgShoppingCart className='fs-2' />
        <div className='d-flex align-items-center mx-2 p-1 top-0 end-0 text-black position-absolute ' id='cart-items'>{cartItemCount}</div>
      </Dropdown.Toggle>


      <Dropdown.Menu style={{ minWidth: 370 }}>
        {cart.length > 0 ? (
          <>
            {cart.map((prod) => (
              <span className="cartitem" key={prod.id}>
                <img
                  src={prod.photo}
                  className="cartItemImg"
                  alt={prod.title}
                />
                <div className="cartItemDetail">
                  <span>{prod.title}</span>
                  <span>₹ {prod.price.split(".")[0]}</span>
                </div>
                <AiFillDelete
                  fontSize="20px"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: prod,
                    })
                  }
                />
              </span>
            ))}
            <Link to="/cart">
              <Button style={{ width: "95%", margin: "0 10px" }}>
                Go To Cart
              </Button>
            </Link>
          </>
        ) : (
          <span style={{ padding: 10 }}>Cart is Empty!</span>
        )}
      </Dropdown.Menu>

    </Dropdown>
  );
}

export default CartDropdown;


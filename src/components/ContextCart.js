import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "./Cart";
import { GrRestaurant } from "react-icons/gr";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const ContextCart = () => {
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);

  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-primary bg-primary ">
        <div className="container-fluid">
          <a className="navbar-brand pt-1 text-light" href="#" style={{ fontSize: '3rem' }}><GrRestaurant size={35} className='r-icon' style={{backgroundColor:'white',borderRadius:'50%',padding:'3px'}} />&nbsp;Restaurant-WebApp</a>
          <MdOutlineAddShoppingCart size={35} style={{backgroundColor:'white',borderRadius:'50%',padding:'3px'}} className='s-icon' />
        </div>
      </nav>


      <section className="main-cart-section">

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
            </Scrollbars>
          </div>
        </div>

        <div className="card-total">
          <h3>
            Cart Total : <span>{totalAmount}₹</span>
          </h3>
          <Link to='/chackout'><button>checkout</button></Link>

        </div>
      </section>
    </>
  );
};

export default ContextCart;

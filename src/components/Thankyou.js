import React from 'react'
import { GrRestaurant } from "react-icons/gr";
import { MdOutlineAddShoppingCart } from "react-icons/md";
export default function Thankyou() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-primary bg-primary ">
                <div className="container-fluid">
                    <a className="navbar-brand pt-1 text-light" href="#" style={{ fontSize: '3rem' }}><GrRestaurant size={35} style={{backgroundColor:'white',borderRadius:'50%',padding:'3px'}}  className='r-icon' />&nbsp;Restaurant-WebApp</a>
                    <MdOutlineAddShoppingCart size={35} style={{backgroundColor:'white',borderRadius:'50%',padding:'3px'}}  className='s-icon' />
                </div>
            </nav>

            <div className='welcome container-fluid'>
                <div>
                    <h3 className='pb-4' style={{ fontSize: '35px' }}>CheckOut</h3>
                    <h3 className='pb-4' style={{ fontSize: '35px' }}>Thank you for the order</h3>
                </div>
            </div>

        </div>
    )
}

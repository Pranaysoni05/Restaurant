import React from 'react'
import { GrRestaurant } from "react-icons/gr";
import { MdOutlineAddShoppingCart } from "react-icons/md";
export default function Thankyou() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: "lightblue" }}>
                <div className="container-fluid">
                    <a className="navbar-brand pt-1" href="#" style={{ fontSize: '3rem' }}><GrRestaurant size={35} className='r-icon' />&nbsp;Restaurant-WebApp</a>
                    <MdOutlineAddShoppingCart size={25} className='s-icon' />
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

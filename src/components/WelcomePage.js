import React from 'react'
// import Header from '../header/Header';
import './WelcomePage.css';
import { GrRestaurant } from "react-icons/gr";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function WelcomePage() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: "lightblue" }}>
                <div className="container-fluid">
                    <a className="navbar-brand pt-1" href="#" style={{ fontSize: '3rem'}}><GrRestaurant size={35} className='r-icon' />&nbsp;Restaurant-WebApp</a>
                    <MdOutlineAddShoppingCart size={25} className='s-icon' />
                </div> 
            </nav>
            <div className='welcome container-fluid'>
                <div>
                    <h3 className='pb-4' style={{fontSize:'35px'}}>Welcome To Restaurant-WebApp</h3>
                    <Link to='/gotomenu'><button className=' btn btn-info' style={{fontSize:'15px'}}>Go To Menu</button></Link>
                </div>
            </div>
        </>
    )
}

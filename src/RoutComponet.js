import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Cart from './components/Cart';
import Thankyou from './components/Thankyou';
import WelcomePage from './components/WelcomePage';


export default function RoutComponet() {
  return (
    <div>
      <>
        <Router>
            <Routes>
                <Route exact path='/' element={<WelcomePage/>}/>
                <Route exact path='/gotomenu' element={<Cart/>}/>
                <Route exact path='/chackout' element={<Thankyou/>}/>
            </Routes>
        </Router>
        </>
    </div>
  )
}

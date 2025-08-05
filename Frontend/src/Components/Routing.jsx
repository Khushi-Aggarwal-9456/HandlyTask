import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Login from './UserAuth/Login';
import Signup from './UserAuth/Signup';
import Navbar from './Navbar';
// import Home from './Components/Home';
import Home from "./Home";
import AllUsers from './Users/AllUsers';

export default function Routing() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path='/' element = { <Login /> } />
            <Route path='/signup' element = { <Signup /> } />
            <Route path='/home' element = {<Home />} />
            <Route path='/users' element = {<AllUsers />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

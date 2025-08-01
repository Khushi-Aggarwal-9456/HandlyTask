import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
}  from "react-router-dom";
import Navbar from './Navbar';
import Login from "./UserAuth/Login";
import Signup from "./UserAuth/Signup";
import Home from './Home';

export default function Routing() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element = {<Login />} />
            <Route path='/signup' element = {<Signup />} />
            <Route path='/home' element = {<Home />} />
        </Routes>
    </BrowserRouter>
  )
}

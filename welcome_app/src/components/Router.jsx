import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';

const Router = () => {
  return (
    <BrowserRouter>


    <Navbar/>
      <Routes>
        {/* <Route path="/" element={<About />}> */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<h1>No Page Found</h1>} />
        {/* </Route> */}
      </Routes>
      </BrowserRouter>
  )
}

export default Router
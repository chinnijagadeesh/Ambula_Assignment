import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='box'>
    <nav>
         
          <Link to='/'>
          <a href="/" class="logo">
            <h1>
              <span class="code">Code</span><span class="kode">Kode</span
              ><span class="fist">&#x1F47A;</span>
            </h1>
          </a>
    </Link>
    
    
          <ul>
          {/* <Link to='/'>
    <li class="nav-item">
            <a href="/" class="nav-link" id="nav-link">Login</a>
          </li>
    </Link> */}
    <Link to='/'>
    <li class="nav-item">
              <a href="/" class="nav-link" id="nav-link">Home</a>
            </li>
    </Link>
    <Link to='about'>
    
    <li class="nav-item">
              <a href="about" class="nav-link" id="nav-link">About</a>
            </li>
    </Link>
    <Link to='contact'>
    <li class="nav-item">
              <a href="contact" class="nav-link" id="nav-link">Contact</a>
            </li>
    </Link>
         
         
           
    </ul>
    </nav>
    
    {/* <Navbar/> */}
</div>    
  )
}

export default Navbar

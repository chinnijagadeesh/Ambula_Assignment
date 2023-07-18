import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='box'>
       <nav>
    <a href="/" class="logo">
      <h1>
        <span class="code">Shoppe</span>e<span class="kode"></span
        ><span class="fist">&#x1F71A;</span>
      </h1>
    </a>

    <ul>
    {/* <li class="nav-item">
        <a href="/" class="nav-link" id="nav-link">HOME</a>
      </li> */}
      <Link to='/'>
      <li class="nav-item">
        <a href="/" class="nav-link" id="nav-link">HOME</a>
      </li>
</Link>

<Link to='/'>
<li class="nav-item">
        <a href="/" class="nav-link" id="nav-link">Login</a>
      </li>
</Link>

<Link to='/cart'>
<li class="nav-item">
        <a href="cart" class="nav-link" id="nav-link">
        <img className='CartImg' src="Cart.png" width={'120px'} alt="" />
        </a>
      </li></Link>

      
      {/* <Link to='/cart'>
     <img className='CartImg' src="Cart.png" width={'120px'} alt="" />
   </Link> */}
     
     
</ul>
</nav>
    </div>
   

  )
}

export default Header

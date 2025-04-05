import React from 'react'
import { NavLink } from 'react-router'

const NavBar = () => {
  return (
    <header>
      <nav>
        <img className='w-6' src="/assets/logo-all_rice.svg" alt="" />
        <div>
          <NavLink to='/'>หน้าหลัก</NavLink>
          <NavLink to='products'>ผลิตภัณฑ์</NavLink>
          <NavLink to='about'>เกี่ยวกับเรา</NavLink>
          <NavLink to='contact'>ติดต่อเรา</NavLink>
        </div>
        <div>
          {/* TO DO: Add cart and profilt icon here */}
          {/* TBC: using Google font icon? */}
          <NavLink to='profile/cart' ><p>Go to cart</p></NavLink>
          {/* <Navlink to='cart' ><img src="" alt="Profile icon" /></Navlink> */}
        </div>
      </nav>
    </header>
  )
}

export default NavBar
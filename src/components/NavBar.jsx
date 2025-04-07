import React from 'react'
import { NavLink } from 'react-router'


const NavBar = () => {
  return (
    <header className='sm:flex justify-center'>
      <nav className='flex justify-between items-center h-16 sm:w-7xl'>
        <div className='flex ml-4 sm:items-center'>
          <figure className='flex items-center'>
            <img className='w-6' src="/assets/logo-all_rice-black.svg" alt="All Rice Logo" />
            <p class="logo-text">All Rice</p>
          </figure>
          <ul className='hidden sm:flex ml-10'>
            <li className='nav-menu'><NavLink to='/'>หน้าหลัก</NavLink></li>
            <li className='nav-menu'><NavLink to='products'>ผลิตภัณฑ์</NavLink></li>
            <li className='nav-menu'><NavLink to='about'>เกี่ยวกับเรา</NavLink></li>
            <li className='nav-menu'><NavLink to='contact'>ติดต่อเรา</NavLink></li>
          </ul>
        </div>
        <div className='flex mr-4'>
          {/* TO DO: Add cart and profilt icon here */}
          {/* TBC: using Google font icon? */}
            <NavLink to='cart' >
              <span span class="material-symbols-outlined">shopping_cart</span>
            </NavLink>
            <NavLink to='profile' >
              <span class="material-symbols-outlined mx-6">account_circle</span>
            </NavLink>
            <div className='sm:hidden'>
              <span class="material-symbols-outlined">menu</span>
            </div>
          {/* <Navlink to='cart' ><img src="" alt="Profile icon" /></Navlink> */}
        </div>
      </nav>
    </header>
  )
}

export default NavBar
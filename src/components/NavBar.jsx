import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';


const UserPopUp = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute z-10 mt-2 translate-x-1/2 right-1/2 top-full user-popup-content">
      <div className="relative p-4 rounded-md shadow-lg -right-2 top-1 bg-primary w-52">

        <NavLink className="flex items-center py-2 hover:text-accent" to="/profile">
          <AccountCircleOutlinedIcon className='mr-2' />
          โปรไฟล์
        </NavLink>


        <NavLink className="flex items-center py-2 hover:text-accent" to="/profile/order-history">
          <ShoppingBagOutlinedIcon className='mr-2' />
          คำสั่งซื้อสินค้า
        </NavLink>

        <NavLink className="flex items-center py-2 hover:text-accent" to="/">
          <LogoutIcon className='mr-2' />
          ออกจากระบบ
        </NavLink>

      </div>
    </div>
  );
};

const SideBar = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">

      <div className="fixed inset-0 bg-transparent" onClick={onClose}></div>

      <div className="relative flex flex-col w-64 h-full transition-transform transform shadow-xl bg-primary duration-600">
        <ul className="flex-1 p-4">
          <li className='py-3 hover:text-accent'>
            <NavLink to='/' onClick={onClose} className="block">หน้าหลัก</NavLink>
          </li>
          <li className='py-3 hover:text-accent'>
            <NavLink to='products' onClick={onClose} className="block">ผลิตภัณฑ์</NavLink>
          </li>
          <li className='py-3 hover:text-accent'>
            <NavLink to='about' onClick={onClose} className="block">เกี่ยวกับเรา</NavLink>
          </li>
          <li className='py-3 hover:text-accent'>
            <NavLink to='contact' onClick={onClose} className="block">ติดต่อเรา</NavLink>
          </li>
        </ul>
        <div className="p-4 bg-accent">
          <div className="flex items-center py-2 text-primary">
            <NavLink to="cart" onClick={onClose}>
              <ShoppingCartOutlinedIcon className="mr-2" />
              ตะกร้าสินค้า
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavBar = () => {
  const [isUserPopUpOpen, setIsUserPopUpOpen] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const { getTotalItems } = useContext(CartContext);

  const toggleUserPopUp = () => {
    setIsUserPopUpOpen(prev => !prev); // Use functional update
    setIsSideBarOpen(false); // Close sidebar when opening user popup
  };

  const closeUserPopup = useCallback(() => {
    setIsUserPopUpOpen(false);
  }, []);

  const toggleSideBar = () => {
    setIsSideBarOpen(prev => !prev); // Use functional update
    setIsUserPopUpOpen(false);
  }

  const closeSideBar = useCallback(() => {
    setIsSideBarOpen(false);
  }, []);

  useEffect(() => {
    if (!isUserPopUpOpen) return;
    const handleClickOutside = (event) => {
      if (!event.target.closest('.profile-icon') && !event.target.closest('.user-popup-content')) {
        closeUserPopup();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };

  }, [isUserPopUpOpen, closeUserPopup]);

  useEffect(() => {
    if (isSideBarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isSideBarOpen]);

  return (
    <header className='justify-center sm:flex'>
      <nav className='flex items-center justify-between z-10 h-16 sm:w-7xl '>
      <div className='flex ml-4 sm:items-center'>
            <figure className='flex items-center'>
              <img className='w-6' src="/assets/logo-all_rice-black.svg" alt="All Rice Logo" />
              <p className="logo-text">All Rice</p>
            </figure>
            <ul className='hidden ml-10 sm:flex'>
              <li className='nav-menu'><NavLink to='/'>หน้าหลัก</NavLink></li>
              <li className='nav-menu'><NavLink to='products'>ผลิตภัณฑ์</NavLink></li>
              <li className='nav-menu'><NavLink to='about'>เกี่ยวกับเรา</NavLink></li>
              <li className='nav-menu'><NavLink to='contact'>ติดต่อเรา</NavLink></li>
            </ul>
          </div>
          <div className='flex mr-4 items-center'>
            <NavLink to='cart' className="flex items-center">

            <Badge badgeContent={getTotalItems()} color="error">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </NavLink>
          <div className='relative mx-6 hover:cursor-pointer profile-icon-container'>
            <AccountCircleOutlinedIcon onClick={toggleUserPopUp} />
            <UserPopUp isOpen={isUserPopUpOpen} />
          </div>
          <div className='cursor-pointer sm:hidden' onClick={toggleSideBar}>
            <MenuIcon />
          </div>
          <SideBar isOpen={isSideBarOpen} onClose={closeSideBar} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar
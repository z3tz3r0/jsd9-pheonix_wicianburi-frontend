import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Badge } from '@mui/material';
import { CartContext } from '../context/CartContext';


const UserPopUp = ({ isOpen = false, onClose = () => { } }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute z-10 mt-2 right-1 top-full">
      <div className="absolute z-10 w-3 h-5 transform rotate-45 right-1 -top-0 bg-primary"></div>
      <div className="relative p-4 rounded-md shadow-lg -right-2 top-1 bg-primary w-52">
        <ul>
          <li className="flex items-center py-2 hover:text-accent">
            <Link to="profile" onClick={onClose}>
              <AccountCircleOutlinedIcon className='mr-2'/>
              โปรไฟล์
            </Link>
          </li>
          <li className="flex items-center py-2 hover:text-accent">
            <Link to="profile/order-history" onClick={onClose}>
              <ShoppingBagOutlinedIcon className='mr-2'/>
              คำสั่งซื้อสินค้า
            </Link>
          </li>
          <li className="flex items-center py-2 hover:text-accent">
            <Link to="/" onClick={onClose}>
              <LogoutIcon className='mr-2'/>
              ออกจากระบบ
            </Link>
          </li>
        </ul>
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
            <Link to='/' onClick={onClose} className="block">หน้าหลัก</Link>
          </li>
          <li className='py-3 hover:text-accent'>
            <Link to='products' onClick={onClose} className="block">ผลิตภัณฑ์</Link>
          </li>
          <li className='py-3 hover:text-accent'>
            <Link to='about' onClick={onClose} className="block">เกี่ยวกับเรา</Link>
          </li>
          <li className='py-3 hover:text-accent'>
            <Link to='contact' onClick={onClose} className="block">ติดต่อเรา</Link>
          </li>
        </ul>
        <div className="p-4 bg-accent">
          <div className="flex items-center py-2 text-primary">
            <Link to="cart" onClick={onClose}>
              <ShoppingCartOutlinedIcon className="mr-2" />
              ตะกร้าสินค้า
            </Link>
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
    setIsUserPopUpOpen(!isUserPopUpOpen);
  }

  const closeUserPopup = () => {
    setIsUserPopUpOpen(false);
  }

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  }

  const closeSideBar = () => {
    setIsSideBarOpen(false);
  }

  useEffect(() => {
    if (isUserPopUpOpen) {
      const handleClickOutside = (event) => {
        if (!event.target.closest('.profile-icon')) {
          closeUserPopup();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isUserPopUpOpen]);

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
            <div className='mx-6 hover:cursor-pointer relative profile-icon-container'>
              <AccountCircleOutlinedIcon onClick={toggleUserPopUp} />
              <UserPopUp isOpen={isUserPopUpOpen} onClose={closeUserPopup} />
            </div>
            <div className='sm:hidden cursor-pointer' onClick={toggleSideBar}>
              <MenuIcon />
            </div>
          <SideBar isOpen={isSideBarOpen} onClose={closeSideBar} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar
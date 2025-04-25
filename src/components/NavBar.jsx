import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const UserPopUp = ({ isOpen = false, onClose = () => { } }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute z-10 mt-2 right-1 top-full">
      <div className="absolute z-10 w-3 h-5 transform rotate-45 right-1 -top-0 bg-primary"></div>

      <div className="relative p-4 rounded-md shadow-lg -right-2 top-1 bg-primary w-52">
        <ul>
          <li className="flex items-center py-2 hover:text-accent">
            <NavLink to="profile" onClick={onClose}>
              <AccountCircleOutlinedIcon className='mr-2' />
              โปรไฟล์
            </NavLink>
          </li>
          <li className="flex items-center py-2 hover:text-accent">
            <NavLink to="profile/order-history" onClick={onClose}>
              <ShoppingBagOutlinedIcon className='mr-2' />
              คำสั่งซื้อสินค้า
            </NavLink>
          </li>
          <li className="flex items-center py-2 hover:text-accent">
            <NavLink to="/" onClick={onClose}>
              <LogoutIcon className='mr-2' />
              ออกจากระบบ
            </NavLink>
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
        <div className="p-4 border-t">
          <div className="flex items-center py-2">
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
      <nav className='flex items-center justify-between h-16 sm:w-7xl '>
        <div className='flex ml-4 sm:items-center'>
          <figure className='flex items-center'>
            <img className='w-6' src="/assets/logo-all_rice-black.svg" alt="All Rice Logo" />
            <p className="logo-text">All Rice</p>
          </figure>
        </div>
        <div className='hidden gap-4 sm:gap-8 sm:flex'>
          <NavLink className='nav-menu' to='/'>หน้าหลัก</NavLink>
          <NavLink className='nav-menu' to='products'>ผลิตภัณฑ์</NavLink>
          <NavLink className='nav-menu' to='about'>เกี่ยวกับเรา</NavLink>
          <NavLink className='nav-menu' to='contact'>ติดต่อเรา</NavLink>
        </div>
        <div className='flex items-center mr-4'>
          <NavLink to='cart'>
            <ShoppingCartOutlinedIcon />
          </NavLink>
          <div className='relative mx-6 profile-icon hover:cursor-pointer'>
            <AccountCircleOutlinedIcon onClick={toggleUserPopUp} />
            <UserPopUp isOpen={isUserPopUpOpen} onClose={closeUserPopup} />
          </div>
          <div className='sm:hidden' onClick={toggleSideBar}>
            <MenuIcon />
          </div>
          <SideBar isOpen={isSideBarOpen} onClose={closeSideBar} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar
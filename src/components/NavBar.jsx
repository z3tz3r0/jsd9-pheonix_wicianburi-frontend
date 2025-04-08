import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const UserPopUp = ({isOpen = false, onClose = () => {}}) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-1 top-full mt-2 z-10">
      <div className="absolute right-1 -top-0 w-3 h-5 bg-primary transform rotate-45 z-10"></div>

      <div className="relative -right-2 top-1 bg-primary rounded-md shadow-lg p-4 w-52">
        <ul>
          <li className="py-2 flex items-center hover:text-accent">
            <NavLink to="profile" onClick={onClose}>
              <AccountCircleOutlinedIcon className='mr-2'/>
              โปรไฟล์
            </NavLink>
          </li>
          <li className="py-2 flex items-center hover:text-accent">
            <NavLink to="order-history" onClick={onClose}>
              <ShoppingBagOutlinedIcon className='mr-2'/>
              คำสั่งซื้อสินค้า
            </NavLink>
          </li>
          <li className="py-2 flex items-center hover:text-accent">
            <NavLink to="/" onClick={onClose}>
              <LogoutIcon className='mr-2'/>
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
    <div className="fixed justify-end inset-0 z-50 flex">

      <div className="fixed inset-0 bg-transparent" onClick={onClose}></div>

      <div className="relative w-64 bg-primary h-full shadow-xl flex flex-col transform transition-transform duration-600">
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
            <p className="logo-text ml-2">All Rice</p>
          </figure>
          <ul className='hidden ml-10 sm:flex'>
            <li className='nav-menu'><NavLink to='/'>หน้าหลัก</NavLink></li>
            <li className='nav-menu'><NavLink to='products'>ผลิตภัณฑ์</NavLink></li>
            <li className='nav-menu'><NavLink to='about'>เกี่ยวกับเรา</NavLink></li>
            <li className='nav-menu'><NavLink to='contact'>ติดต่อเรา</NavLink></li>
          </ul>
        </div>
        <div className='flex mr-4 items-center'>
          <NavLink to='cart'>
            <ShoppingCartOutlinedIcon />
          </NavLink>
          <div className='profile-icon mx-6 hover:cursor-pointer relative'>
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
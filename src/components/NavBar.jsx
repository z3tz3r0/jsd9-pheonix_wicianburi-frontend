import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Backdrop, Badge } from '@mui/material';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';
import AuthPage from '../modules/authPages/AuthPage';


const UserPopUp = ({ isOpen }) => {
   const { logout } = useContext(AuthContext);
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

        <NavLink className="flex items-center py-2 hover:text-accent" to="/" onClick={logout}>
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

  const [isAuthPageOpen, setIsAuthPageOpen] = useState(false);
  const authPageRef = useRef(null);

  const { getTotalItems } = useContext(CartContext);
  const { isLogin, setIsLogin } = useContext(AuthContext);

  const openAuthPage = () => {
    setIsAuthPageOpen(true);
    setIsUserPopUpOpen(false); // Ensure other popups are closed
    setIsSideBarOpen(false);
  };

  const closeAuthPage = useCallback(() => {
    setIsAuthPageOpen(false);
  }, []);

  // --- UserPopUp Controls (Keep for now, modify later based on isLogin) ---
  const toggleUserPopUp = () => {
    // TODO: This logic will change. If logged in, toggle UserPopUp. If not, call openAuthPage.
    // For now, let's make it open AuthPage if not logged in.
    if (isLogin) {
      setIsUserPopUpOpen(prev => !prev);
      setIsSideBarOpen(false);
      closeAuthPage(); // Close auth modal if opening user popup
    } else {
      openAuthPage(); // Open Auth modal if not logged in
    }
  };

  const closeUserPopup = useCallback(() => {
    setIsUserPopUpOpen(false);
  }, []);

  const toggleSideBar = () => {
    setIsSideBarOpen(prev => !prev); // Use functional update
    setIsUserPopUpOpen(false);
    closeAuthPage();
  }

  const closeSideBar = useCallback(() => {
    setIsSideBarOpen(false);
  }, []);

  useEffect(() => {
    if (!isAuthPageOpen) return;

    const handleClickOutside = (event) => {
      if (authPageRef.current && !authPageRef.current.contains(event.target)) {
        closeAuthPage();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isAuthPageOpen, closeAuthPage]);

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
  }, [isSideBarOpen, isAuthPageOpen, isUserPopUpOpen]);

  return (
    <>
      <header className='justify-center sm:flex'>

        <nav className='z-10 flex items-center justify-between h-16 sm:w-7xl '>
          <div className='flex ml-4 sm:items-center'>
            <Link to="/" className='flex items-center'>
              <img className='w-6' src="/assets/logo-all_rice-black.svg" alt="All Rice Logo" />
              <p className="logo-text">All Rice</p>
            </Link>
            <ul className='hidden ml-10 sm:flex'>
              <li className='nav-menu'><NavLink to='/'>หน้าหลัก</NavLink></li>
              <li className='nav-menu'><NavLink to='products'>ผลิตภัณฑ์</NavLink></li>
              <li className='nav-menu'><NavLink to='about'>เกี่ยวกับเรา</NavLink></li>
              <li className='nav-menu'><NavLink to='contact'>ติดต่อเรา</NavLink></li>
            </ul>

          </div>
          <div className='flex items-center mr-4'>
            <NavLink to='cart' className="flex items-center">

              <Badge badgeContent={getTotalItems()} color="error">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </NavLink>
            <div className='relative mx-6 hover:cursor-pointer profile-icon-container'>
              <AccountCircleOutlinedIcon onClick={toggleUserPopUp} />
              <UserPopUp isOpen={isUserPopUpOpen} setIsLogin={setIsLogin} />
            </div>
            <div className='cursor-pointer sm:hidden' onClick={toggleSideBar}>
              <MenuIcon />
            </div>
            <SideBar isOpen={isSideBarOpen} onClose={closeSideBar} />
          </div>
        </nav>
      </header>

      {/* --- Conditionally Render AuthPage Modal --- */}
      {isAuthPageOpen && (
        <div ref={authPageRef}>
          <Backdrop
            open={isAuthPageOpen}
            onClick={openAuthPage}
          >
          </Backdrop>
          <AuthPage onClose={closeAuthPage} />
        </div>
      )}
    </>
  );
};

export default NavBar
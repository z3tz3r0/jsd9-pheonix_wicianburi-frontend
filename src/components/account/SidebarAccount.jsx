import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import React from 'react';
import { NavLink } from 'react-router';

// ยังไม่ฟังก์ชั่น รอปรับแก้
const SidebarAccount = () => {
  return (
    <div className="z-10 hidden mt-2 sm:block">
      <div className="p-4 rounded-md shadow-lg bg-primary w-52">
        <ul>
          <li className="flex items-center py-2 hover:text-accent">
            <NavLink to=".">
              <AccountCircleOutlinedIcon className='mr-2' />
              บัญชีของฉัน
            </NavLink>
          </li>
          <li className="flex items-center py-2 hover:text-accent">
            <NavLink to="order-history">
              <ShoppingBagOutlinedIcon className='mr-2' />
              การซื้อของฉัน
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SidebarAccount
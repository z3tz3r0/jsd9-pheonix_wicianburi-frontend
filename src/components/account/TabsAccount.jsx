// src/components/Sidebar.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router'; // Import useNavigate
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { cn } from '@/lib/utils';

const TabsAccount = () => {
    const navigate = useNavigate(); // เรียกใช้งาน useNavigate
  const [activeItem, setActiveItem] = useState('.');

  const menuItems = [
    {
      id: '.',
      name: 'บัญชีของฉัน',
      icon: <AccountCircleOutlinedIcon className="w-5 h-5" />
    },
    {
      id: 'order-history',
      name: 'การซื้อของฉัน',
      icon: <ShoppingBagOutlinedIcon className="w-5 h-5" />
    }
  ];

  const handleTabClick = (href) => {
    setActiveItem(href);
    navigate(href); // ใช้ navigate เพื่อเปลี่ยนเส้นทาง
  };

  return (
    <div className="flex items-center justify-around mb-8 border-b border-gray-200 sm:shadow-lg sm:rounded-md sm:p-4 sm:h-fit bg-primary sm:w-52 sm:flex-col sm:item-start ">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleTabClick(item.id)}
            className={cn(
              "sm:py-3 transition-colors cursor-pointer sm:w-full sm:text-left",
              activeItem === item.id
                ? "text-accent border-b-2 border-accent sm:border-hidden"
                : "hover:text-accent"
            )}
          >
            <span className={cn(
              "mr-3 hidden sm:inline",
              activeItem === item.id ? "" : "hover:text-accent "
            )}>
              {item.icon}
            </span>
            <span className="font-medium">{item.name}</span>
          </button>
        ))}
    </div>
  );
};

export default TabsAccount;
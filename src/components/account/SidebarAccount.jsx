// src/components/Sidebar.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router'; // Import useNavigate
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { cn } from '@/lib/utils';

const SidebarAccount = () => {
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
    <div className="hidden p-4 rounded-md shadow-lg h-fit bg-primary w-52 sm:block ">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleTabClick(item.id)}
            className={cn(
              "flex items-center py-2 transition-colors cursor-pointer",
              activeItem === item.id
                ? "text-accent"
                : "hover:text-accent"
            )}
          >
            <span className={cn(
              "mr-3",
              activeItem === item.id ? "" : "hover:text-accent "
            )}>
              {item.icon}
            </span>
            <span className="font-medium">{item.name}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default SidebarAccount; 
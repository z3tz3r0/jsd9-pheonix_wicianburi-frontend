import { useState } from 'react';
import { useNavigate } from 'react-router'; // Import useNavigate
import { cn } from '@/lib/utils';

const TabbarAccount = () => {
  const navigate = useNavigate(); // เรียกใช้งาน useNavigate
  const [activeItem, setActiveItem] = useState('.'); // ใช้ pathname ปัจจุบันเป็นค่าเริ่มต้น

  const menuItems = [
    {
      id: '.',
      name: 'บัญชีของฉัน',
    },
    {
      id: 'order-history',
      name: 'การซื้อของฉัน',
    },
  ];

   const handleTabClick = (href) => {
     setActiveItem(href);
     navigate(href); // ใช้ navigate เพื่อเปลี่ยนเส้นทาง
   };

  return (
    <div className="flex items-center justify-around mb-8 border-b border-gray-200 bg-primary sm:hidden">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleTabClick(item.id)}
          className={cn(
            'flex-1 py-3 transition-colors flex flex-col items-center justify-center cursor-pointer',
            activeItem === item.id ? ' border-b-2 border-accent' : 'text-gray-400 hover:text-accent'
          )}
        >
        <span className="font-medium">{item.name}</span>
        </button>
      ))}
    </div>
  );
};

export default TabbarAccount;
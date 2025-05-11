import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Backdrop, CircularProgress } from "@mui/material";
import { LayoutDashboardIcon, ShoppingBag, ShoppingCart, UsersRound } from 'lucide-react';
import { useCallback, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import { useAdminAuth } from "./AdminContext";
import AdminLogin from "./AdminLogin";
import AppSidebar from './Dashboard/AppSidebar';
import SiteHeader from "./Dashboard/SiteHeader";

const navData = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/admin",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Products",
      url: "products",
      icon: ShoppingBag,
    },
    {
      title: "Orders",
      url: "orders",
      icon: ShoppingCart,
    },
    {
      title: "Users",
      url: "users",
      icon: UsersRound,
    },
  ],
};

const getTitleFromPath = (pathname) => {
  const allNavItems = [...navData.navMain];
  const currentNavItem = allNavItems.find(item => item.url === pathname);
  return currentNavItem ? currentNavItem.title : "Dashboard";
}


const AdminLayout = () => {
  const location = useLocation();
  const [activeTitle, setActiveTitle] = useState(() => getTitleFromPath(location.pathname));

  const handleTitleUpdate = useCallback((newTitle) => setActiveTitle(newTitle), []);

  const { admin, loading } = useAdminAuth();

  if (loading) {
    return (
      <Backdrop
        open={loading}
      >
        <CircularProgress />
      </Backdrop>
    )
  }

  if (!admin) {
    return <AdminLogin />
  }


  return (
    // Using dark theme 
    <SidebarProvider className="text-white dark">
      <AppSidebar
        variant="inset"
        navData={navData}
        onTitleChange={handleTitleUpdate}
      />
      <SidebarInset>
        <SiteHeader title={activeTitle} />
        <div className="flex flex-col flex-1">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default AdminLayout
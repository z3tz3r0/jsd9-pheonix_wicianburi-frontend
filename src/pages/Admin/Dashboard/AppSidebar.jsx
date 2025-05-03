import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import NavMain from "@/pages/Admin/Dashboard/NavMain";
import NavUser from "@/pages/Admin/Dashboard/NavUser";
import * as React from "react";
import { Link } from "react-router-dom";

function AppSidebar({ navData, onTitleChange, ...props }) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
              onClick={() => onTitleChange("Dashboard")}
            >
              <Link to="/admin">
                <img
                  className="w-4"
                  src="/assets/logo-all_rice-white.svg"
                  alt="All Rice Logo"
                />
                <span className="text-base font-semibold">All Rice Inc.</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={navData.navMain} onTitleChange={onTitleChange} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={navData.user} />
      </SidebarFooter>
    </Sidebar>
  );
}


export default AppSidebar;
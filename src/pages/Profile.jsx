import React from 'react'
import { Outlet } from 'react-router'
import SidebarAccount from '../components/account/SidebarAccount'
import TabbarAccount from '../components/account/TabbarAccount'

const Profile = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between min-h-[80dvh] mx-auto mt-8 max-w-7xl ">
      <SidebarAccount />
      <TabbarAccount />
      <Outlet />
    </div>
  )
}

export default Profile
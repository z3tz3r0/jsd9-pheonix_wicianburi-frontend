import React from 'react'
import { Outlet } from 'react-router'
import SidebarAccount from '../components/account/SidebarAccount'
import TabbarAccount from '../components/account/TabbarAccount'

const Profile = () => {
  return (
    <div className="flex justify-between min-h-[80dvh] mx-auto mt-8 max-w-7xl outline-1">
      <SidebarAccount />
      <TabbarAccount />
      <Outlet />
    </div>
  )
}

export default Profile
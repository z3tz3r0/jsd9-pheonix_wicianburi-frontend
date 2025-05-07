import React from 'react'
import { Outlet } from 'react-router'
import TabsAccount from '../components/account/TabsAccount'

const Profile = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between min-h-[80dvh] mx-auto mt-8 max-w-7xl ">
      <TabsAccount />
      <Outlet />
    </div>
  )
}

export default Profile
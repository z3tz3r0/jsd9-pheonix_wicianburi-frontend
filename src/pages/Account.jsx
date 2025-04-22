import React from 'react'
import SidebarAccount from '../components/account/SidebarAccount'
import AccountContainer from '../containers/AccountContainer'

import TabbarAccount from '../components/account/TabbarAccount'

const Account = () => {
  return (
    <div className='flex justify-center'>
      <div className="flex flex-col sm:flex-row sm:justify-between w-7xl">
        <SidebarAccount />
        <TabbarAccount />
        <AccountContainer />
      </div>
    </div>
  )
}

export default Account
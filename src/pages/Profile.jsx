import React from 'react'
import { Outlet } from 'react-router'
import Account from './Account'

const Profile = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center'>Profile</h1>
            <Outlet />
        </div>
    )
}

export default Profile
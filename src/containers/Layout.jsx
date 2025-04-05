import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const Layout = () => {
    return (
        <>
            <NavBar />
            <Outlet /> {/* react router dom component */}
            <Footer />
        </>
    )
}

export default Layout
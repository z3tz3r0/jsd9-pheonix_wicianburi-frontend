import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import ScrollToTopButton from '../components/ButtonToTop'

const Layout = () => {


  return (
    <>
      <NavBar />
      <Outlet /> {/* react router dom component */}
      <ScrollToTopButton />
      <Footer />
    </>
  )
}

export default Layout
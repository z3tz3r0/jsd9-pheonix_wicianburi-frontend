import React from 'react'
import { Outlet } from 'react-router'
import ChatBot from '../components/ChatBot/ChatBot'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const Layout = () => {


  return (
    <>
      <NavBar />
      <ChatBot />
      <Outlet /> {/* react router dom component */}
      <Footer />
    </>
  )
}

export default Layout
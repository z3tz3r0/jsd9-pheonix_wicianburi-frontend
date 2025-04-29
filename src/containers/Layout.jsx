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
      <div className='min-h-[80dvh]'>
        <Outlet /> {/* react router dom component */}
      </div>
      <Footer />
    </>
  )
}

export default Layout
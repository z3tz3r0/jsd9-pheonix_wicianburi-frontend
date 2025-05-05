import React from 'react'
import { Outlet } from 'react-router'
import ChatBot from '../components/ChatBot/ChatBot'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import ScrollToTopButton from '../components/ButtonToTop'

const Layout = () => {


  return (
    <>
      <NavBar />
      <ScrollToTopButton />
      <ChatBot />
      <div className='min-h-[80dvh]'>
        <Outlet /> {/* react router dom component */}
      </div>
      <Footer />
    </>
  )
}

export default Layout
import React from 'react';
import { useOutletContext } from 'react-router';
import ChatBot from '../components/ChatBot/ChatBot';

const Home = () => {
  const context = useOutletContext();
  console.log(context)
  return (
    <div className=''>
      <h1>Home</h1>
      <ChatBot />
    </div>
  )
}

export default Home
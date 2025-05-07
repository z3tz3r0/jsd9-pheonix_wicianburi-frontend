import { TriangleAlert } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import ButtonMain from '../components/ButtonMain'

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-[60vh]'>
      <h1 className='text-5xl font-bold text-center'>404<br />Not Found</h1>
      <TriangleAlert className='mb-8' size={150} />
      <Link to="/"><ButtonMain>กลับหน้าหลัก</ButtonMain></Link>
    </div>
  )
}

export default NotFound
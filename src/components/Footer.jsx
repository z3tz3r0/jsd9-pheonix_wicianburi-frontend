import React from 'react'
import { NavLink } from 'react-router'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
    return (
        <div className=''>
            <footer className='flex flex-col justify-center p-4 sm:px-16'>
                <div className='justify-between sm:flex sm:items-start sm:mt-5'>
                    <figure className='flex items-center mb-15'>
                        <img className='w-6' src="/assets/logo-all_rice-white.svg" alt="All Rice Logo" />
                        <p className="logo-text text-primary ml-2">All Rice</p>
                    </figure>
                    <div className='sm:w-sm'>
                        <ul className='flex justify-between border-b-1 border-primary'>
                            <li className='footer-menu'><NavLink to='/'>หน้าหลัก</NavLink></li>
                            <li className='mx-4 footer-menu'><NavLink to='products'>ผลิตภัณฑ์</NavLink></li>
                            <li className='mr-4 footer-menu'><NavLink to='about'>เกี่ยวกับเรา</NavLink></li>
                            <li className='footer-menu'><NavLink to='contact'>ติดต่อเรา</NavLink></li>
                        </ul>
                        <div className='flex justify-end mt-4 mb-15'>
                            <NavLink to='/' >
                                <FacebookOutlinedIcon className='text-3xl text-primary'/>
                            </NavLink>
                            <NavLink to='/' >
                                <XIcon className='text-3xl text-primary mx-4' />
                            </NavLink>
                            <NavLink to='/' >
                                <YouTubeIcon className='text-3xl text-primary' />
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between h-6 p-2 mb-2 border-t-1 border-gray'>
                    <p className='footer-text'>allrice.com</p>
                    <div className='flex'>
                        <NavLink to='/' >
                            <p className='mx-5 footer-text'>นโยบายและความเป็นส่วนตัว</p>
                        </NavLink>
                        <NavLink to='/' >
                        <p className='footer-text'>ข้อกำหนดและเงื่อนไข</p>
                        </NavLink>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
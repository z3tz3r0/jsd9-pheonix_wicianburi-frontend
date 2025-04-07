import React from 'react'
import { NavLink } from 'react-router'

const Footer = () => {
    return (
        <div className=''>
            <footer className='flex flex-col justify-center p-4 sm:px-16'>
                <div className='justify-between sm:flex sm:items-start sm:mt-5'>
                    <figure className='flex items-center mb-15'>
                        <img className='w-6' src="/assets/logo-all_rice-white.svg" alt="All Rice Logo" />
                        <p className="logo-text text-[var(--clr-primary)]">All Rice</p>
                    </figure>
                    <div className='sm:w-sm'>
                        <ul className='flex justify-between border-b-1 border-[var(--clr-primary)]'>
                            <li className='footer-menu'><NavLink to='/'>หน้าหลัก</NavLink></li>
                            <li className='mx-4 footer-menu'><NavLink to='products'>ผลิตภัณฑ์</NavLink></li>
                            <li className='mr-4 footer-menu'><NavLink to='about'>เกี่ยวกับเรา</NavLink></li>
                            <li className='footer-menu'><NavLink to='contact'>ติดต่อเรา</NavLink></li>
                        </ul>
                        <div className='flex justify-end mt-4 mb-15'>
                            <NavLink to='cart' >
                                <i className="mx-5 text-3xl text-white ph ph-facebook-logo"></i>
                            </NavLink>
                            <NavLink to='cart' >
                                <i className="text-3xl text-white ph ph-tiktok-logo"></i>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between border-t-1 border-[var(--clr-gray)] h-6 p-2 mb-2'>
                    <p className='footer-text'>allrice.com</p>
                    <div className='flex'>
                        <p className='mx-5 footer-text'>นโยบายและความเป็นส่วนตัว</p>
                        <p className='footer-text'>ข้อกำหนดและเงื่อนไข</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
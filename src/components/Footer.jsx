import React from 'react'
import { NavLink } from 'react-router'

const Footer = () => {
    return (
        <div className=''>
            <footer className='flex flex-col justify-center p-4 sm:px-16'>
                <div className='sm:flex justify-between sm:items-start sm:mt-5'>
                    <figure className='flex items-center mb-15'>
                        <img className='w-6' src="/assets/logo-all_rice-white.svg" alt="All Rice Logo" />
                        <p class="logo-text text-[var(--clr-primary)]">All Rice</p>
                    </figure>
                    <div className='sm:w-sm'>
                        <ul className='flex justify-between border-b-1 border-[var(--clr-primary)]'>
                            <li className='footer-menu'><NavLink to='/'>หน้าหลัก</NavLink></li>
                            <li className='footer-menu mx-4'><NavLink to='products'>ผลิตภัณฑ์</NavLink></li>
                            <li className='footer-menu mr-4'><NavLink to='about'>เกี่ยวกับเรา</NavLink></li>
                            <li className='footer-menu'><NavLink to='contact'>ติดต่อเรา</NavLink></li>
                        </ul>
                        <div className='flex justify-end mt-4 mb-15'>
                            <NavLink to='cart' >
                                <i class="ph ph-facebook-logo text-3xl text-white mx-5"></i>
                            </NavLink>
                            <NavLink to='cart' >
                                <i class="ph ph-tiktok-logo text-3xl text-white"></i>
                            </NavLink>
                        </div>
                    </div>
                </div>   
                <div className='flex justify-between border-t-1 border-[var(--clr-gray)] h-6 p-2 mb-2'>
                    <p className='footer-text'>allrice.com</p>
                    <div className='flex'>
                        <p className='footer-text mx-5'>นโยบายและความเป็นส่วนตัว</p>
                        <p className='footer-text'>ข้อกำหนดและเงื่อนไข</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
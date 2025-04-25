import React from 'react'
import ChatBot from '../components/ChatBot/ChatBot'
import { Button, Typography } from '@mui/material'
import { Link, NavLink } from 'react-router'
import Carousel from '../containers/Carousel'
import ButtonMain from '../components/ButtonMain'
import ButtonFilter from '../components/ButtonFilter'
import ScrollToTopButton from '../components/ButtonToTop'

const Home = () => {
    return (
        <div>
            <ChatBot />
            <ScrollToTopButton />
            {/* hero section */}
            <section className='hero-section h-[654px] flex sm:justify-center'>
                <div className='hidden sm:flex flex-col items-start mt-40 mr-20'>
                    {/* <Typography variant="h3" component="h3">
                        <span className='text-accent text-6xl'>ข้าว</span>คุณภาพจากใจ <br/>ส่งตรงถึงคุณ
                    </Typography> */}
                    <h3 className='text-5xl font-semibold text-nowrap'><span className='text-accent text-7xl'>ข้าว</span>คุณภาพจากใจ <br/>ส่งตรงถึงคุณ</h3>
                    <p className='text-xl mt-2 mb-5'>เลือกข้าวคุณภาพ เพื่อมื้อพิเศษของคุณ</p>
                    <Link to='products'>
                    <ButtonMain type="submit" className="py-6 mt-4 mb-16 sm:w-40 bg-[#01c9ac]">ช้อปเลย</ButtonMain>
                    </Link>
                </div>
                <div className='flex flex-col items-center'>
                    <figure className='sm:flex relative overflow-hidden -z-0'>
                        <figure className='w-auto h-auto bg-accent rounded-b-full top-0 right-0 sm:w-[480px] sm:h-[500px]'>
                            <img src="/assets/homepage-img.png" alt="homepage image"/>
                        </figure>
                    </figure>
                    <Link to='products' className='sm:hidden'>
                    <ButtonMain type="submit" className="py-6 mt-4 mb-16 sm:w-40 bg-[#01c9ac]">ช้อปเลย</ButtonMain>
                    </Link>
                </div>
            </section>

            {/* recommend section */}
            <section className='flex flex-col items-center h-[560px] mt-10'>
                <h2 className='text-4xl font-bold sm:text-[52px]'>สินค้าขายดี</h2>
                <Carousel />
            </section>

            {/* image section */}
            <section className='flex flex-col my-20'>
                <figure className='flex ml-20 sm:justify-end'>
                    <img src="https://www.thaiticketmajor.com/variety/img_content/imgeditor/53220415_3178335835525744_2428596284089696256_n(2).jpg" alt="image-decorate1" className='h-[400px] sm:w-auto sm:h-auto' />
                </figure>
                <figure className='mt-4'>
                    <img src="https://img-ha.mthcdn.com/8ySBElIEiEu7AhUt34KWw0A3CAk=/travel.mthai.com/app/uploads/2019/03/kaosalee-9.jpg" alt="image-decorate2" className='h-[200px] sm:w-1/2 sm:h-auto' />
                </figure>
            </section>

            {/* filter section */}
            <section className='grid grid-cols-2 sm:flex sm:flex-col'>
                <div className='category-1 flex flex-col justify-center items-center h-[200px] sm:h-[300px]'>
                    {/* <Typography component="h3" sx={{fontSize: {xs:'1.25rem', sm:'2.25rem'}, fontWeight: '600'}}>ข้าวหอมมะลิ</Typography> */}
                    <h3 className='text-[28px] font-bold my-2 sm:text-[44px] text-black'>ข้าวหอมมะลิ</h3>
                    <Link to='products'>
                        <ButtonFilter>
                            shop
                        </ButtonFilter>
                    </Link>
                </div>
                <div className='category-2 flex flex-col justify-center items-center h-[200px] sm:h-[300px]'>
                    {/* <Typography component="h3" sx={{fontSize: {xs:'1.25rem', sm:'2.25rem'}, fontWeight: '600'}}>ข้าวเหนียว</Typography> */}
                    <h3 className='text-[28px] font-bold my-2 sm:text-[44px] text-black'>ข้าวเหนียว</h3>
                    <Link to='products'>
                        <ButtonFilter>
                            shop
                        </ButtonFilter>
                    </Link>
                </div>
                <div className='category-3 flex flex-col justify-center items-center h-[200px] sm:h-[300px]'>
                    {/* <Typography component="h3" sx={{fontSize: {xs:'1.25rem', sm:'2.25rem'}, fontWeight: '600'}}>ข้าวขาว</Typography> */}
                    <h3 className='text-[28px] font-bold my-2 sm:text-[44px] text-black'>ข้าวขาว</h3>
                    <Link to='products'>
                        <ButtonFilter>
                            shop
                        </ButtonFilter>
                    </Link>
                </div>
                <div className='category-4 flex flex-col justify-center items-center h-[200px] sm:h-[300px]'>
                    {/* <Typography component="h3" sx={{fontSize: {xs:'1.25rem', sm:'2.25rem'}, fontWeight: '600' }}>ข้าวเพื่อสุขภาพ</Typography> */}
                    <h3 className='text-[28px] font-bold my-2 sm:text-[44px] text-black'>ข้าวเพื่อสุขภาพ</h3>
                    <Link to='products'>
                        <ButtonFilter>
                            shop
                        </ButtonFilter>
                    </Link>
                </div>
            </section>

            {/* other product */}
            <section className='flex flex-col items-center h-[560px]'>
                {/* <Typography variant="h3" component="h2">ผลิตภัณฑ์แปรรูปจากข้าว</Typography> */}
                <h2 className='text-4xl font-bold mt-10 sm:text-[52px]'>ผลิตภัณฑ์แปรรูปจากข้าว</h2>
                <Carousel />
            </section>

            {/* promotion section */}
            <section className='flex justify-between items-center h-40'>
                <p className='font-semibold mx-10 sm:text-lg'>Free Delivery<br/> On all order over ฿1000</p>
                <img src="https://static9.depositphotos.com/1713439/1191/i/450/depositphotos_11917531-stock-photo-three-rows-of-rice-varieties.jpg" alt="footer-image" className='h-40' />
            </section>
        </div>
    )
}

export default Home
import React from 'react'
import { Button, Typography } from '@mui/material'
import ButtonAddToCart from '../components/ButtonAddToCart'
import { NavLink } from 'react-router'
import Carousel from '../containers/Carousel'

const Home = () => {
    return (
        <div>
            <section className='hero-section h-[654px] flex sm:justify-center'>
                <div className='hidden sm:flex flex-col items-start mt-40 mr-20'>
                    <Typography variant="h3" component="h3">
                        <span className='text-accent text-6xl'>ข้าว</span>คุณภาพจากใจ <br/>ส่งตรงถึงคุณ
                    </Typography>
                    <p className='text-lg mt-2 mb-5'>เลือกข้าวคุณภาพ เพื่อมื้อพิเศษของคุณ</p>
                    <NavLink to='products'>
                        <Button variant="contained"  
                        sx={{
                        backgroundColor: "#01c9ac",
                        color: "primary",
                        borderRadius: 100,
                        fontWeight: 'semibold',
                        py: 1,
                        textWrap: "nowrap",
                        fontSize: "20px",
                    }}>ช้อปเลย</Button>
                    </NavLink>
                </div>
                <div className='flex flex-col items-center'>
                    <figure className='sm:flex relative overflow-hidden -z-0'>
                        <figure className='w-auto h-auto bg-accent rounded-b-full top-0 right-0 sm:w-[480px] sm:h-[500px]'>
                            <img src="/assets/homepage-img.png" alt="homepage image"/>
                        </figure>
                    </figure>
                    <NavLink to='products' className='my-5 sm:hidden'>
                            <Button variant="contained"  
                            sx={{
                            backgroundColor: "#01c9ac",
                            color: "primary",
                            borderRadius: 100,
                            fontWeight: 'semibold',
                            py: 1,
                            textWrap: "nowrap",
                            fontSize: "20px",
                        }}>ช้อปเลย</Button>
                        </NavLink>
                </div>
            </section>

            <section className='flex flex-col items-center h-[560px]'>
                <Typography variant="h3" component="h2">สินค้าขายดี</Typography>
                <Carousel />
            </section>

            <section className='h-[560px]'>

            </section>

            <section>
                <div className='flex flex-col items-center'>
                    <Typography component="h3" sx={{fontSize: {xs:'1.25rem', sm:'2.25rem'}, fontWeight: '600'}}>ข้าวหอมมะลิ</Typography>
                    <NavLink to='products'>
                        <Button variant="contained"  
                        sx={{
                        backgroundColor: "#01c9ac",
                        color: "primary",
                        borderRadius: 100,
                        fontWeight: 'semibold',
                        py: 1,
                        textWrap: "nowrap",
                        fontSize: "18px",
                    }}>ช้อปเลย</Button>
                    </NavLink>
                </div>
                <div className='flex flex-col items-center'>
                    <Typography component="h3" sx={{fontSize: {xs:'1.25rem', sm:'2.25rem'}, fontWeight: '600'}}>ข้าวเหนียว</Typography>
                    <NavLink to='products'>
                        <Button variant="contained"  
                        sx={{
                        backgroundColor: "#01c9ac",
                        color: "primary",
                        borderRadius: 100,
                        fontWeight: 'semibold',
                        py: 1,
                        textWrap: "nowrap",
                        fontSize: "18px",
                    }}>ช้อปเลย</Button>
                    </NavLink>
                </div>
                <div className='flex flex-col items-center'>
                    <Typography component="h3" sx={{fontSize: {xs:'1.25rem', sm:'2.25rem'}, fontWeight: '600'}}>ข้าวขาว</Typography>
                    <NavLink to='products'>
                        <Button variant="contained"  
                        sx={{
                        backgroundColor: "#01c9ac",
                        color: "primary",
                        borderRadius: 100,
                        fontWeight: 'semibold',
                        py: 1,
                        textWrap: "nowrap",
                        fontSize: "18px",
                    }}>ช้อปเลย</Button>
                    </NavLink>
                </div>
                <div className='flex flex-col items-center'>
                    <Typography component="h3" sx={{fontSize: {xs:'1.25rem', sm:'2.25rem'}, fontWeight: '600' }}>ข้าวเพื่อสุขภาพ</Typography>
                    <NavLink to='products'>
                        <Button variant="contained"  
                        sx={{
                        backgroundColor: "#01c9ac",
                        color: "primary",
                        borderRadius: 100,
                        fontWeight: 'semibold',
                        py: 1,
                        textWrap: "nowrap",
                        fontSize: "18px",
                    }}>ช้อปเลย</Button>
                    </NavLink>
                </div>
            </section>

            <section className='flex flex-col items-center h-[560px]'>
                <Typography variant="h3" component="h2">ผลิตภัณฑ์แปรรูปจากข้าว</Typography>
            </section>

            <section className='flex items-center h-30 outline'>
                <p className='mx-10'>Free Delivery<br/> On all order over ฿1000</p>
                <img src="" alt="" />
            </section>
        </div>
    )
}

export default Home
import React from 'react'
import { Typography } from '@mui/material'
import ButtonAddToCart from '../components/ButtonAddToCart'


const Home = () => {
    return (
        <div>
            <section className='h-screen outline'>
                {/* <figure className='hidden sm:flex relative overflow-hidden -z-0'>
                    <figure className='fixed w-[480px] h-[500px] bg-accent rounded-b-full top-0 right-0'>
                        <img src="/assets/homepage-img.png" alt=""/>
                    </figure>
                </figure> */}
            </section>

            <section className='flex flex-col items-center h-[560px]'>
                <Typography variant="h3" component="h2">สินค้าขายดี</Typography>
            </section>

            <section className='h-[560px]'>

            </section>

            <section>
                <div className='flex flex-col items-center'>
                    <Typography component="h3" sx={{fontSize: '1.25rem'}}>ข้าวหอมมะลิ</Typography>
                    <ButtonAddToCart />
                </div>
                <div className='flex flex-col items-center'>
                    <Typography component="h3" sx={{fontSize: '1.25rem'}}>ข้าวเหนียว</Typography>
                    <ButtonAddToCart />
                </div>
                <div className='flex flex-col items-center'>
                    <Typography component="h3" sx={{fontSize: '1.25rem'}}>ข้าวขาว</Typography>
                    <ButtonAddToCart />
                </div>
                <div className='flex flex-col items-center'>
                    <Typography component="h3" sx={{fontSize: '1.25rem'}}>ข้าวเพื่อสุขภาพ</Typography>
                    <ButtonAddToCart />
                </div>
            </section>

            <section className='flex flex-col items-center h-[560px]'>
                <Typography variant="h3" component="h2">ผลิตภัณฑ์แปรรูปจากข้าว</Typography>
            </section>

            <section>
                <p>Free Delivery</p>
                <p>On all order over ฿1000</p>
            </section>
        </div>
    )
}

export default Home
import React from 'react'
import NavBar from '../components/NavBar'

const Home = () => {
    return (
        <div>
            <section className='overflow-hidden h-screen'>
                <figure className='hidden sm:flex justify-center fixed top-0 right-0 w-[480px] h-[500px] bg-[var(--clr-accent)] rounded-b-full z-0 mr-[300px]'>
                    <img src="/assets/homepage-img.png" alt="" className='z-10'/>
                </figure>
            </section>
        </div>
    )
}

export default Home
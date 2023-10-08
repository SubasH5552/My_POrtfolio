import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {

    return (
    <div name='home' className=' w-full h-screen'>
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-white text-3xl'>My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-gray-600'>Subash Chandra Pradhan</h1>
        <h2 className='text-4xl sm:text-5xl font-bold text-zinc-500'>I'm a Front-end Developer</h2>
        <p className='text-white py-4 max-w-[700px]'></p>
        <div>
        <Link to='work' smooth={true} duration={500}>
            <button  className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-stone-400 hover:border-stone-700'>View Work
            <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3 '/>
            </span>
            </button>
        </Link>
        </div>
    </div>
    </div>
    )
}

export default Home
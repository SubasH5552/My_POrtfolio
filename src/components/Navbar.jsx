import React, {useState} from 'react'
import {FaBars, FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav]= useState(false)
    const handleClick =() => setNav(!nav)

    return (
    <div className='fixed w-full h-[80px] flex  justify-between items-center px-2 bg-gray-800  text-white z-50'>
        <div className=' cursor-pointer w-1/2 justify-start'>
            <a href='/'>Subash Chandra Pradhan</a>
        </div>
        <ul className='hidden md:flex w-full justify-end'>
            <li className='hover:scale-110 duration-300'>
                <Link to='home' smooth={true} duration={500}>
                Home
                </Link>
            </li>
            <li className='hover:scale-110 duration-300'>
                <Link to='about' smooth={true} duration={500}>
                About
                </Link>
            </li>
            <li className='hover:scale-110 duration-300'>
                <Link to='skills' smooth={true} duration={500}>
                Skills
                </Link>
            </li>
            <li className='hover:scale-110 duration-300'>
                <Link to='work' smooth={true} duration={500}>
                Work
                </Link>
            </li>
            <li className='hover:scale-110 duration-300'>
                <Link to='contact' smooth={true} duration={500}>
                Contact
                </Link>
            </li>
        </ul>
        
        <div onClick={handleClick} className='md:hidden z-10 w-1/2 flex justify-end cursor-pointer'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>
        <ul className=' '></ul>
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-slate-500 via-gray-700 to-slate-500 flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                Home
            </Link></li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                About
            </Link></li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                Skills
            </Link></li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                Work
            </Link></li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                Contact
            </Link></li>
        </ul>
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-[#0077b5]'>
                    <a className='flex justify-between items-center w-full text-white'
                    href="https://www.linkedin.com/in/subash-chandra-pradhan-a7945b224/">
                        LinkedIn <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-black'>
                    <a className='flex justify-between items-center w-full text-white'
                    href="https://github.com/SubasH5552">
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-[#BB001B]'>
                    <a className='flex justify-between items-center w-full text-white'
                    href="mailto:suesubash2525@gmail.com">
                        Gmail <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500'>
                    <a className='flex justify-between items-center w-full text-white'
                    href="https://instagram.com/p.h.o.t.o._b.o.s.___?igshid=NzZlODBkYWE4Ng==">
                        Instagram <AiOutlineInstagram size={30} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default Navbar
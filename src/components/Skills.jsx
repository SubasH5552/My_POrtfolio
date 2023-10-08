import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import github from '../assets/github.png'

const Skills = () => {
    return (
    <div name='skills' className='w-full h-screen'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl inline border-b-4 border-slate-800 text-white'>Skills</p>
                <p className='py-4 text-gray-500'>// These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-lg hover:shadow-[#E34C26] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={html} alt="Html Icon" />
                    <p className='my-4 text-white'>HTML</p>
                </div>
                <div className='shadow-lg hover:shadow-[#264de4] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={css} alt="CSS Icon" />
                    <p className='my-4 text-white'>CSS</p>
                </div>
                <div className='shadow-lg hover:shadow-[#FFD700] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={js} alt="JS Icon" />
                    <p className='my-4 text-white'>JavaScript</p>
                </div>
                <div className='shadow-lg hover:shadow-[#61DAFB] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={react} alt="REACT Icon" />
                    <p className='my-4 text-white'>ReactJs</p>
                </div>
                <div className='shadow-lg hover:shadow-[#000000] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={github} alt="GITHUB Icon" />
                    <p className='my-4 text-white'>GitHub</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Skills
import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ml-40'>
            <h5 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Andarg Worku</h5>
            <h6 className='text-1xl sm:text-4xl font-bold text-[#8892b0]'>I am a full Stack Web Developer</h6>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I am a full stack Web developer specializing in building and deploying
                Web project but currently focus on frontend Web developer  </p>
                 <div><button className='text-white group border-2 px-6 py-3 my-3 flex items-center
                  hover:bg-pink-600 hover:border-pink-600'>View works
                  <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span></button></div>

        </div>
      
    </div>
  )
}

export default Home

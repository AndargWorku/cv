import React from 'react'
import logo from "../assets/logo.jpg"

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300 -mt-32'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        about
                    </p>

                </div>
                <div></div>

            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 ml-96'>
                <div>
                    <p className='sm:text-right text-2xl font-bold'>Hi every one I am Andarg worku nice to meet you .please take look around</p>
                
                    <p>
                        I am passionate about building excellent software that improves the lives of those around me 
                        i specializing in creating software for client ranging from individuals and small business
                        all the way to large enterprise cooperation what we to do if you do a software expert available a fingertips
                         
                    </p>
                </div>
                <div>
                    <img src={logo} alt=' andarg worku' style={{width:'260px',height:'220px' }}/>
                </div>
                
            </div>

        </div>
      
    </div>
  );
};

export default About;

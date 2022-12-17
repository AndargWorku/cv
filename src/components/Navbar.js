import React from 'react'
import { Link } from 'react-scroll'
import { useState } from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin, FaFacebook, FaTelegram, FaInstagram, FaTwitter} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
// import {BsFillPersonalLineFill} from "react-icons/hi"
// import logo from "../assets/logo.jpg"
// import logo from "../assets/logo.jpg"fhhgjj
import contact from "../assets/contact.jpg"

const Navbar = () => {
    const[nav,setNav]=useState(false)
    const handleClick=()=>setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between  items-center px-4 bg-[#0a192f] text-gray-300'>
      
      <div className='-mt-9'>
        <img src={contact} alt='profile ' style={{width:'100px',height:'100px',marginTop:'70px'}}/>
      </div>
      
        <ui  className='hidden md:flex'>
        <li> <Link to="home" smooth={true} duration={500} >
          Home
        </Link></li>
            <li> <Link to="about" smooth={true} duration={500} >
          About
        </Link></li>
            <li> <Link to="skills" smooth={true} duration={500} >
          Skills
        </Link></li>
            <li>  <Link to="Contact" smooth={true} duration={500} >
          Contact
        </Link></li>
            <li> <Link to="Work" smooth={true} duration={500} >
          Work
        </Link></li>
            <li>  <Link to="expraince" smooth={true} duration={500} >
          Experience
        </Link>
        </li>
        </ui>
      
      {/* hamburger */}
      <div onClick={handleClick} className='md: z-10'>
        {!nav?<FaBars/>:<FaTimes/>}

      </div>
      {/* mobile menu */}
      <div>
      <ui className={!nav?'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-between items-center'}>
            <li className='py-6 text-4xl' ><Link onClick={handleClick} to="home" smooth={true} duration={500} >
          Home
        </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500} >
          About
        </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500} >
          Skills
        </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="Contact" smooth={true} duration={500} >
          Contact
        </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="Work" smooth={true} duration={500} >
          Work
        </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="expraince" smooth={true} duration={500} >
            Expriance
        </Link></li>
        </ui>
      </div>
      {/* soial icons */}
      <div className='hidden:lg flex fixed flex-col top-[35%] left-0'>
        <ui className='-mt-14'>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a href="https://www.linkedin.com/company/login/?originalSubdomain=ph" target="blank"
                className='flex justify-between w-full items-center text-gray-300'>
                    Linkedin<FaLinkedin size={30}/></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a href='https://www.google.com/' target="blank"
                 className='flex justify-between w-full items-center text-gray-300'>
                    Facebook<FaFacebook size={30}/></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                <a href='https://github.com/AndargWorku' target="blank"  className='flex justify-between w-full items-center text-gray-300'
                 >
                    Github<FaGithub size={30}/></a>
                </li>
                
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100] hover:ml-[-10px] duration-300 bg-[#6b060f12]'>
                <a href='https://core.telegram.org/blackberry/login' target="blank"
                 className='flex justify-between w-full items-center text-gray-300'>
                    Telegram<FaTelegram size={30}/></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100] hover:ml-[-10px] duration-300 bg-[rgb(97,5,5)]'>
                <a href='https://www.secure.instagram.com/accounts/login/?next=/kookspoems/feed/&source=profile_feed_tab&hl=en-gb'
                target="blank"
                className='flex justify-between w-full items-center text-gray-300'>
                    instagram
                    <FaInstagram size={30}/></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100] hover:ml-[-10px] duration-300 bg-[#4611d811]'>
                <a href='https://twitter.com/i/flow/login' target="blank"
                 className='flex justify-between w-full items-center text-gray-300'>
                    Twitter<FaTwitter size={30}/></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100] hover:ml-[-10px] duration-300 bg-[#3c1bce77]'>
                <a href="https://mail.google.com/mail/u/0/#inbox"
                 target='_blank' className='flex justify-between w-full items-center text-gray-300'>
                    Email<HiOutlineMail size={30}/></a>
                </li>
        </ui>
        

      </div>
    </div>
    
  )
}

export default Navbar

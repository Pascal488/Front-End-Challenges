import React from 'react'
import { BsFacebook, BsLinkedin, BsPinterest, BsTwitter } from "react-icons/bs";
import {AiOutlineInstagram} from "react-icons/ai"


const Footer = () => {
  return (
    <div>
        <div className='bg-gray-100 bg-cover p-24 flex justify-around text-gray-900 text-sm md:flex-col md:text-center' id='contact'>
            <div>
                <ul className='list-none'>
                    <li className=' mb-3 text-xl'>ASM</li>
                    <li className='max-w-[230px]'>
                    The advantage of hiring a 
                    workspace with us is
                     that givees you comfortable service 
                     and all-around facilities.
                    </li>
                </ul>
            </div>
            <div>
                <ul className='list-none gap-5'>
                <li className=' mb-3 text-xl text-orange-400'>Services</li>
                <li>Email Marketing</li>
                <li>Campaigns</li>
                <li>Branding</li>
                </ul>
            </div>
            <div>
                <ul className='list-none  '>
                    <li className=' text-xl mb-3 text-orange-400'>Furniture</li>
                    <li>Beds</li>
                    <li>Chair</li>
                    <li>All</li>
                    
                </ul>
            </div>
            <div className='md:flex md:justify-center'>
                <ul className='flex flex-col  list-none '>
                    <li className='text-xl mb-3 text-orange-400' >Follow Us</li>
                    <span className='flex items-center gap-1'>
                        <BsFacebook/>
                    <li>Facebook</li>
                    </span>
                    <span className='flex items-center gap-1'>
                        <BsTwitter/>
                    <li>Twitter</li>
                    </span>
                    <span className='flex items-center gap-1'>
                    <AiOutlineInstagram/>
                    <li>Instagram</li>
                    </span>
                </ul>
            </div>
        </div>
        <div className='flex justify-between -mt-10 text-gray-800 text-xs md:hidden'>
                <div>
                    <span className='ml-48 md:ml-0'>
                    Copyright © 2022
                    </span>
                </div>
                <div className='flex gap-2 relative -left-36 '>
                    <span>
                    Terms & Conditions
                    </span>
                    <span>
                    Privacy Policy
                    </span>
                </div>
            </div>
        
    </div>
  )
}

export default Footer
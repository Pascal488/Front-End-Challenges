import React from 'react'

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
            <div>
                <ul className='list-none '>
                    <li className='text-xl mb-3 text-orange-400' >Follow Us</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
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
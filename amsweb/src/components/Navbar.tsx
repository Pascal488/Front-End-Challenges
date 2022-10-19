import { url } from 'inspector'
import React from 'react'

import { HiSearchCircle } from 'react-icons/hi'
import BackgroundImage from '../assets/images/image.jpg'

import { BrowserRouter } from 'react-router-dom';

import { HashLink as Link } from 'react-router-hash-link'


const Navbar = () => {


    return (
        <div >
            <BrowserRouter>
                <div className='p-5 bg-black text-white mb-5 '
                    style={{
                        backgroundImage: "url('https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg&_gl=1*gwoqpz*_ga*MTUxMjM0NjE5NC4xNjY2MDc5MDM2*_ga_8JE65Q40S6*MTY2NjA3OTAzOS4xLjEuMTY2NjA4MDcwNS4wLjAuMA..')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundOrigin: "center"
                    }}
                >
                    <div className='flex justify-around '>
                        <div className='justify-self-start'>

                            <span className='font-extrabold cursor-pointer'>
                                AMS
                            </span>


                        </div>

                        <div >
                            <ul className='list-none flex gap-10 cursor-pointer'>
                                <Link to='#furniture' smooth>
                                <li>Furniture</li>
                                </Link>
                                <Link to='#aboutus' smooth>
                                <li>About Us</li>
                                </Link>
                                <Link to='#contact' smooth>
                                <li>Contact</li>
                                </Link>
                            </ul>
                        </div>
                        <div>
                            <img src="" alt="" />
                        </div>

                    </div>

                    <div className='text-center p-10 '>
                        <div className='text-2xl lg:text-5xl font-semibold'>
                            <span className='block'>
                                Make your interior more
                            </span>
                            <span className='block'>
                                minimalistic & modern
                            </span>
                        </div>
                        <div>
                            <span className='block '>
                                Turn your room with ams into a lot more minimalist
                            </span>
                            <span>
                                and modern with ease and speed
                            </span>
                        </div>
                        <div className='p-10'>
                            <span>
                                <input type="text" placeholder='Search furniture' className='outline-none text-black w-56 p-1 rounded-2xl placeholder-shown:text-sm' />
                            </span>
                        </div>

                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Navbar
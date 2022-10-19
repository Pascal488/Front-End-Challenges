import React from 'react'

const Aboutus = () => {
  return (
    <div>
        <div    className='flex justify-around p-8 gap-5'>
            <div className=''>
           
            <div className='relative -left-20 z-40'>
                <img src="
                 https://images.pexels.com/photos/7598126/pexels-photo-7598126.jpeg?auto=compress&cs=tinysrgb&w=800
                " alt=""  className='max-w-[70%] p-0 rounded-2xl   '/>
            
            </div>
            <div className='relative -top-72 left-[390px] bg-gray-100 w-32 h-64 z-0 rounded-2xl '>

            </div>
            </div>

            <div className='relative -left-36 '>
                <span className='relative -left-2 capitalize p-2 text-orange-300 font-semibold'>
                Experiences

                </span>
                <h1 className='text-3xl capitalize p-0 mb-5 mt-3 font-semibold'>
                we provide you the <br/>
                best experience
                </h1>
                <p className='max-w-[450px] text-gray-900 text-sm'>
                You don’t have to worry about the result 
                because all of these interiors are made 
                by people who are professionals in their 
                fields with an elegant and lucurious style 
                and with premium quality materials
                </p>
            </div>
        </div>

       
    </div>
  )
}

export default Aboutus
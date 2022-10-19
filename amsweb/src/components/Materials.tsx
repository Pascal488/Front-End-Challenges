import React from 'react'

export const Materials = () => {
    return (
        <div className='flex -mt-52 justify-between items-center py-10 md:-mt-0 md:flex-col'>
            <div className='w-full md:w-full md:px-8 px-8 xl:px-24'>
                <span className='relative -left-2 capitalize p-2 text-orange-300 font-semibold'>
                    materials
                </span>
                <h1 className='text-3xl capitalize p-0 mb-5 mt-3 font-semibold'>
                    Very serious <br /> materials for making<br />  furniture
                </h1>
                <p className='text-gray-900 text-sm max-w-[350px]'>
                    Because ams was very serious about designing furniture for our environment,
                    using a very expensive and famous capital but at a relatively low price
                </p>
            </div>

            <div className='flex justify-end gap-2 w-full md:w-1/2 relative left-0 md:hidden'>
                <div className='flex flex-col gap-2'>
                    <img src="
                    https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
                    " alt="" className='w-36 h-36 rounded-xl' />
                    <img src="
                    https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
                    " alt="" className='w-36 h-52 rounded-xl' />
                </div>

                <img src="
                    https://images.pexels.com/photos/7598126/pexels-photo-7598126.jpeg?auto=compress&cs=tinysrgb&w=800
                    " alt="" className='relative top-10  max-w-[60%] rounded-l-2xl' />
            </div>

        </div>
    )
}


export default Materials;

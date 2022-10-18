import React from 'react'

export const Materials = () => {
    return (
        <div >
            <div className='flex -mt-52 p-8 justify-center items-center'>
                <div className='relative left-24'>
                    <span className='relative -left-2 capitalize p-2 text-orange-300 font-semibold'>
                        materials

                    </span>
                    <h1 className='lg:text-3xl capitalize p-0 mb-5 mt-3 font-semibold'>
                        Very serious <br /> materials for making<br />  furniture
                    </h1>
                    <p className='max-w-[450px] text-gray-900 text-sm'>
                        Because ams was very serious about designing furniture for our environment,
                        using a very expensive and famous capital but at a relatively low price
                    </p>
                </div>
                <div className='flex gap-2 relative -right-[424px]'>
                    <div className='flex flex-col gap-2'>
                        <img src="
                        https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
                        " alt="" className='w-36 h-36  rounded-xl' />
                        <img src="
                        https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
                        " alt="" className='w-36 h-52  rounded-xl' />
                    </div>
                    
                        <div>
                        <div className='relative top-10'>
                        <img src="
                            https://images.pexels.com/photos/7598126/pexels-photo-7598126.jpeg?auto=compress&cs=tinysrgb&w=800
                            " alt="" className='max-w-[50%]  rounded-l-2xl  z-10 ' />
                        </div>
                        
                        </div>
                </div>

            </div>
        </div>
    )
}

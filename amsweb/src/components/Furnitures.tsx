import React from 'react'


const Dummy: any = [


    {
        id: 'm1',
        title: 'The second meet up',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Korea 69360 Meet-ups',
        discreption: 'This is the second me'
    },

    {
        id: 'm2',
        title: 'The second meet up',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Korea 69360 Meet-ups',
        discreption: 'This is the second me'
    },

]

const Furnitures = (props: any) => {
    return (
        <div className='bg-slate-50 h-auto mb-5 '>
            <div className='mb-5'>
                <h1 className='text-center lg:text-3xl font-semibold pt-3'>
                    Best Selling Product
                </h1>
            </div>
            <div className='flex justify-center mb-5'>
                <div className='px-6 py-2 bg-slate-100 px text-center rounded-3xl'>
                    <ul className='flex gap-2 list-none '>
                        <li className='hover:bg-white hover:rounded-3xl  cursor-pointer px-2'>Chairs</li>
                        <li className='hover:bg-white hover:rounded-3xl  cursor-pointer px-2'>Beds</li>
                        <li className='hover:bg-white hover:rounded-3xl  cursor-pointer px-2'>Sofa</li>
                        <li className='hover:bg-white hover:rounded-3xl  cursor-pointer px-2'>Lamp</li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-center gap-5'>
                <div className='py-10  '>
                    <img src="
               https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=800
                " alt="" className='w-48 h-36 rounded-t-xl' />
                    <div className='bg-white w48 h-24 shadow-xl rounded-2xl'>
                        <ul className='list-none p-2'>
                            <li>Chair</li>
                            <li className='font-semibold text-gray-900'>Baltsar chair</li>
                        </ul>
                    </div>
                </div>
                <div className='py-10 rounded-2xl'>
                    <img src="
               https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
                " alt="" className='w-48 h-36 rounded-t-xl' />
                    <div className='bg-white w48 h-24 shadow-xl rounded-2xl'>
                        <ul className='list-none p-2'>
                            <li>Beds</li>
                            <li className='font-semibold text-gray-900'>Baltsar chair</li>
                        </ul>
                    </div>
                </div>
                <div className='py-10 rounded-2xl'>
                    <img src="
               https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
                " alt="" className='w-48 h-36  rounded-t-xl' />
                    <div className='bg-white w48 h-24 shadow-xl rounded-2xl'>
                        <ul className='list-none p-2'>
                            <li>Sofa</li>
                            <li className='font-semibold text-gray-900'>Baltsar chair</li>
                        </ul>
                    </div>
                </div>
                <div className='py-10 rounded-2xl'>
                    <img src="
            https://images.pexels.com/photos/1634580/pexels-photo-1634580.jpeg?auto=compress&cs=tinysrgb&w=800
                " alt="" className='w-48 h-36 rounded-t-xl' />
                    <div className='bg-white w48 h-24 shadow-xl rounded-2xl'>
                        <ul className='list-none p-2'>
                            <li>Lamps</li>
                            <li className='font-semibold text-gray-900'>Baltsar chair</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Furnitures
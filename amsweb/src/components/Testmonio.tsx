import React from 'react'

const Testmonio = () => {
    const commonstyles = {
        backgroundImage: "url('https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg&_gl=1*gwoqpz*_ga*MTUxMjM0NjE5NC4xNjY2MDc5MDM2*_ga_8JE65Q40S6*MTY2NjA3OTAzOS4xLjEuMTY2NjA4MDcwNS4wLjAuMA..')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundOrigin: "center",
            height:"320px",
            width:"255px",
            borderRadius:"12px"
    }
  return (
    <div className='p-5 h-auto mb-5 '>
    <div className='mb-5'>
        <h3 className='text-center font-semibold pt-3 text-orange-400 mb-2'>
            Testimonials
        </h3>
        <h1 className='text-center lg:text-3xl'>
        Our Client Reviews
        </h1>
    </div>
   
    <div className='flex justify-center gap-5 md:flex-col md:justify-center'>
        
        <div className=' md:m-auto'
        style={commonstyles}
        >   
        <div className='bg-white w-[230px] h-[150px] relative top-40 left-3  rounded-xl shadow-xl'>
            <div className='text-center text-xs'>
                <div>

            <img src="
                        https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
                        " alt="" className='w-10 h-10  rounded-full relative left-24 -top-4' />
                </div>

                <h1>Bang Upin</h1>
                <span>Pedagang Asongan</span>
                <p className='max-w-[200px] text-center'>
                “Terimakasih banyak, 
                kini ruanganku menjadi 
                lebih mewah dan terlihat mahal“
                </p>
            </div>
        </div>    
        </div>
        <div className=' md:m-auto'
        style={commonstyles}
        >   
        <div className='bg-white w-[230px] h-[150px] relative top-40 left-3 rounded-xl shadow-xl'>
            <div className='text-center text-xs'>
                <div>

            <img src="
                        https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
                        " alt="" className='w-10 h-10  rounded-full relative left-24 -top-4' />
                </div>

                <h1>Bang Upin</h1>
                <span>Pedagang Asongan</span>
                <p className='max-w-[200px] text-center'>
                “Terimakasih banyak, 
                kini ruanganku menjadi 
                lebih mewah dan terlihat mahal“
                </p>
            </div>
        </div>    
        </div>
        <div className=' md:m-auto'
        style={commonstyles}
        >   
        <div className='bg-white w-[230px] h-[150px] relative top-40 left-3 rounded-xl shadow-xl'>
            <div className='text-center text-xs'>
                <div>
            <img src="
                        https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
                        " alt="" className='w-10 h-10  rounded-full relative left-24 -top-4' />
                </div>

                <h1>Bang Upin</h1>
                <span>Pedagang Asongan</span>
                <p className='max-w-[200px] text-center'>
                “Terimakasih banyak, 
                kini ruanganku menjadi 
                lebih mewah dan terlihat mahal“
                </p>
            </div>
        </div>    
        </div>
        
        

    </div>

</div>
  )
}

export default Testmonio
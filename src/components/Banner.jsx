import React, { useEffect } from 'react'

export const Banner = ({ bannerList }) => {
    useEffect(() => {
        // console.log(bannerList[0].image_background);
    })
    // console.log(bannerList[0].name);
    return (
        <div className='relative'>
            <div className='absolute bottom-4 text-white mx-6'>
                <h1 className=' text-lg h'>{ bannerList[1].name }</h1>
                {/* <button className=' p-2 hover: bg-sky-700 text-white rounded-lg'>
                    Get App
                </button> */}
                <button className="border text-gray-50  duration-300 relative group cursor-pointer   overflow-hidden h-10 w-28 rounded-md bg-neutral-800 p-2  font-extrabold hover:bg-sky-700">

                    <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
                    <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
                    <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
                    <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
                    <p className="z-10 absolute bottom-2 left-2 text-white">Get App</p>
                </button>

            </div>
            <img src={ bannerList[1].image_background } className=' md:h-80 w-full object-cover rounded-lg' />
            {/* <p></p> */ }
        </div>
    )
}



{/* <div key={ index } className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
    <img src={ game.image_background } className="w-full h-auto object-cover rounded-lg" />
    <div className="absolute bottom-0 left-0 right-0 h-40 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
        <h1 className="text-2xl font-semibold">{ game.name }</h1>
        <p className="mt-2">This is a beautiful nature image placeholder. You can replace it with your own image.</p>
    </div>
</div> */}
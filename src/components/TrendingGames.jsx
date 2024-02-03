import React from 'react';


export const TrendingGames = ({ trendingGames }) => {
    console.log(trendingGames);

    return (

        <div className='hidden md:flex md:flex-col gap-5'>
            <h1 className=' text-3xl font-bold'>Trending Games</h1>
            <div className=' grid md:grid-cols-3 lg:grid-cols-5 gap-5'>

                {
                    trendingGames.map((game, index) => index < 5 &&
                        <div key={ index } className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer group hover:scale-110 transition-all duration-300 ease-in-out z-10 hover:gap-3">
                            <img src={ game.image_background } className="object-cover w-full h-80 rounded-lg" />
                            <div className="absolute bottom-0 left-0 right-0 h-20 bg-black bg-opacity-40 backdrop-blur text-white p-4 rounded-b-lg">
                                <h1 className="text-2xl font-semibold">{ game.name }</h1>

                            </div>
                        </div>)
                }
            </div>
        </div>


    )
}

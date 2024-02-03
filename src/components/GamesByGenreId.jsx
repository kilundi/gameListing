import React, { useEffect } from 'react'

export const GamesByGenreId = ({ gamesById }) => {
    useEffect(() => { console.log("GameList", gamesById) }, [])
    return (
        <div>
            <h1 className=' text-3xl font-bold'>Popular Games</h1>
            <div className=' grid md:grid-cols-3 lg:grid-cols-5 gap-5 mt-8'>
                {

                    gamesById.map((item, index) => index < 5 &&
                        (
                            <div key={ index } className="w-60 h-80 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow cursor-pointer">

                                <img src={ item.background_image } className="object-cover w-full h-80 rounded-lg " />
                                <h2 className="text-2xl font-semibold">{ item.name } <span>{ item.metacritic }</span></h2>
                                <h2>⭐{ item.rating } 💬{ item.reviews_count } 🔥{ item.suggestions_count } </h2>
                            </div>)
                    )
                }
            </div>
        </div>
    )
}

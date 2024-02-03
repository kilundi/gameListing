import React, { useEffect, useState } from 'react'
import ApiGlobal from '../services/ApiGlobal'

export const GenreList = () => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        getGenreList();
    }, [])
    const getGenreList = () => {
        ApiGlobal.genresList.then((resp) => {
            // console.log(resp.data.results);
            return setGenres(resp.data.results)
        });

    }
    return (
        <div>
            <h2 className=' text-[30px] font-bold dark:text-white'>
                Genre
            </h2>
            { genres.map((item, index) => {
                return (
                    <div key={ index } className='flex gap-3 my-2 items-center cursor-pointer group hover:bg-slate-400 p-2 rounded-lg '>

                        <img src={ item.image_background } className='w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-110 transition-all ease-out duration-500' />
                        <p className=' group-hover:font-bold'>{ item.name }</p>
                    </div>
                )
            }) }
        </div>


    )
}

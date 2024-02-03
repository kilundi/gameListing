import React, { useEffect, useState } from 'react'
import ApiGlobal from '../services/ApiGlobal'

export const GenreList = () => {
    const [genres, setGenres] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
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
            { genres.map((item, index) => (

                <div key={ index } className={ ` flex gap-3 my-2 items-center cursor-pointer group hover:bg-slate-400 p-2 rounded-lg ${activeIndex == index ? "bg-gray-300 dark:bg-gray-600" : null} ` }
                    onClick={ () => {
                        setActiveIndex(index)
                    } }
                >

                    <img src={ item.image_background } className={ `w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-110 transition-all ease-out duration-500 ${activeIndex == index ? "scale-105" : null}` } />
                    <p className={ ` group-hover:font-bold ${activeIndex == index ? "font-bold" : null} ` }>{ item.name }</p>
                </div>

            )) }
        </div>


    )
}

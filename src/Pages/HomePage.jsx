import React, { useEffect, useState } from 'react'
import { GenreList } from '../components/GenreList'
import ApiGlobal from '../services/ApiGlobal'
import { Banner } from '../components/Banner'
import { TrendingGames } from '../components/TrendingGames'
import { GamesByGenreId } from '../components/GamesByGenreId'

export const HomePage = () => {
    const [gameList, setGameList] = useState([])
    const [gameListById, setGameListById] = useState([])
    useEffect(() => {
        getGameList();
        gamesByGenreId();
    }, [])
    const getGameList = () => {
        ApiGlobal.genresList.then((resp) => {
            console.log(resp)
            setGameList(resp.data.results)
        })
    }

    const gamesByGenreId = (id) => {
        ApiGlobal.getGamesByGenreId(5).then((resp) => {
            setGameListById(resp.data.results)
        })
    }
    return (
        <div className='grid grid-cols-5 w-full h-full grow'>
            <div className=' hidden md:block px-3'>
                <GenreList />
            </div>

            <div className=' col-span-5 md:col-span-4'>
                { gameList?.length > 0 && gameListById.length > 0 ? <div className='flex flex-col gap-5 pr-6'>
                    <Banner bannerList={ gameList } />
                    <TrendingGames trendingGames={ gameList } />
                    <GamesByGenreId gamesById={ gameListById } />
                </div> : null }

            </div>
        </div>
    )
}

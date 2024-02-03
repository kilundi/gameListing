import React, { useState } from 'react'
import logo from './../assets/images/logo2.png';
import moon from './../assets/images/moon2.png';
import sun from './../assets/images/sun.png';
import { FcSearch } from "react-icons/fc";
export const Header = () => {
    const [mode, setMode] = useState(true);
    const toggleTheme = () => {
        document.documentElement.classList.toggle("dark")
    }

    return (
        <div className='flex items-center px-6 py-3'>
            <img src={ logo } width={ 40 } height={ 40 } />
            <div className='flex items-center p-2 w-full bg-gray-500 rounded-2xl m-4 gap-2'>
                <FcSearch />
                <input type="text" placeholder='Search Games' className='flex grow bg-transparent outline-none' />

            </div>
            <button onClick={ toggleTheme }>
                { mode ? <img src={ moon } width={ 35 } height={ 35 } className=' bg-slate-500 p-1 rounded-full cursor-pointer' onClick={ () => { setMode(!mode) } } /> : <img src={ sun } width={ 35 } height={ 35 } className=' bg-gray-500 p-1 rounded-full cursor-pointer' onClick={ () => { setMode(!mode) } } /> }


            </button>
        </div>
    )
}

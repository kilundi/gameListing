import { useState } from 'react'
import { HomePage } from './Pages/HomePage'
import { Header } from './components/Header'


function App() {
  // const [theme, setTheme] = useState('dark');

  return (
    <>
      <div className='min-h-screen dark:bg-gray-700 dark:text-slate-200 bg-slate-300 text-slate-950'>
        <Header />
        <HomePage />
      </div>
    </>
  )
}

export default App

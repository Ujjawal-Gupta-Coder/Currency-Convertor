import React from 'react'
import Hero from './components/Hero'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-screen min-h-screen h-fit bg-gradient-to-t from-purple-600 via-pink-400 to-yellow-100 flex flex-col justify-center items-center gap-8 px-2 pt-8 pb-2'>
      <Hero />
      <Footer />
    </div>
  )
}

export default App

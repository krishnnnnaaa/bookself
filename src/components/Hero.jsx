import React from 'react'
import Search from './Search'

function Hero() {
  return (
    <div className='w-full flex bg-black text-white py-4 flex-col px-4'>
        <h1 className='my-4 text-4xl'>Book Library</h1>
        <p className='text-lg text-gray-400 mb-4'>Discover, Read, Save - Your Personal Library Awaits.</p>
        <Search/>
    </div>
  )
}

export default Hero
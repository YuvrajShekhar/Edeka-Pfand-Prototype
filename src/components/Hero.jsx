import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#000000] font-bold p-2'>Bearlocal</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Bearlocal</h1>
        <div>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Bearlocal Test text 3</p>
        </div>
        <p className='md:text-2xl text-xl font-bold test-gray-500'>Test lorem ipsum text random generated ones</p>
    </div>
  )
}

export default Hero
import React from 'react'

const MovieList = ({ title }) => {
  return (
    <div className='text-white p-10 mb-8'>
        <h2 className='uppercase text-xl mb-4'> {title} </h2>
        <div className='flex items-center space-x-4'>
            <div className='w-[200px] h-[280px] bg-red-400'>

            </div>
        </div>
    </div>
  )
}

export default MovieList
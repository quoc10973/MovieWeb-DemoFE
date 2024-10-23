import React from 'react'
import imgTemp from '../assets/poster.jpg'

const MovieList = ({ title, data }) => {
  return (
    <div className='text-white p-10 mb-3'>
        <h2 className='uppercase text-xl mb-4'> {title} </h2>
        <div className='flex items-center space-x-4'>
        {data.length > 0 && data.map((item) => (
            <div key={item.id} className='flex items-center space-x-4'>
                <div className='w-[230px] h-[320px] relative group cursor-pointer'>
                  <div className='group-hover:scale-105 transition-transform duration-500 ease-in-out  bg-cyan-900 rounded-sm w-full h-full'>
                    <div className='absolute w-full h-[290px] top-0 left-0 bg-black/20'/>
                      <img src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`} alt={item.title} className='w-full h-[290px] object-cover'/>
                      <p className='uppercase flex items-end justify-center text-lg'> {item.title || item.original_title} </p> 
                   </div>             
                </div>
            </div>
        ))
        }
        </div>
 
    </div>
  )
}

export default MovieList
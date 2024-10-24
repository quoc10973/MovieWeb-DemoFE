import React from 'react'
import imgTemp from '../assets/poster.jpg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1600 },
    items: 6
  },
  largeDesktop: {
    breakpoint: { max: 1600, min: 1440 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 1440, min: 1080 }, // Đưa min xuống thành 1080 để phù hợp với màn hình của bạn
    items: 4
  },
  fullHD: { // Breakpoint cho màn hình Full HD như của bạn
    breakpoint: { max: 1080, min: 900 }, 
    items: 3.5 // Hiển thị 3.5 items
  },
  tablet: {
    breakpoint: { max: 900, min: 768 },
    items: 3
  },
  smallTablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2.5
  },
  largeMobile: {
    breakpoint: { max: 640, min: 540 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 540, min: 360 },
    items: 1.5
  },
  smallMobile: {
    breakpoint: { max: 360, min: 0 },
    items: 1
  }
};


const MovieList = ({ title, data }) => {
  return (
    <div className='text-white p-10 mb-3'>
        <h2 className='uppercase text-xl mb-4'> {title} </h2>  
        <Carousel className='flex items-center' responsive={responsive}>
        {data.length > 0 && data.map((item) => (
            <div key={item.id} className='flex'>
                <div className='w-[230px] h-[313px] relative group cursor-pointer'>
                  <div className='group-hover:scale-105 transition-transform duration-500 ease-in-out  bg-cyan-900 rounded-sm w-full h-full'>
                    <div className='absolute w-full h-[290px] top-0 left-0 bg-black/20'/>
                      <img src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`} alt={item.title} className='w-full h-[290px] object-cover'/>
                      <p className='uppercase flex items-center justify-center text-sm'> {item.title || item.original_title} </p> 
                   </div>             
                </div>
            </div>
        ))
        }
        </Carousel>
 
    </div>
  )
}

export default MovieList
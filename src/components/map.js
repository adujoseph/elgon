import React from 'react'
import { map } from '../images'

const Map = () => {
  return (
    <div className="bg-white py-10 h-max lg:py-20 flex items-center flex-col justify-center">
      <img src={map} className='w-full' alt="" />

      <button className='bg-black text-white p-2 mt-4 rounded-xl sm:mb-1 text-xs sm:text-sm sm:mt-20 2xl:text-xl 2xl:p-5'>GET FLOORPLANS, PRICING & INSTANT VIP ACCESS</button>
    </div>
  );
}

export default Map

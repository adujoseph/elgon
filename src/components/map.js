import React from 'react'
import { map } from '../images'

const Map = () => {
  return (
    <div className="bg-white py-5 h-max sm:py-10 flex items-center flex-col justify-center">
      <img src={map} alt="" />

      <button className='bg-black text-white p-2 mt-4 rounded-xl sm:my-10 text-xs sm:text-sm sm:mt-0'>GET FLOORPLANS, PRICING & INSTANT VIP ACCESS</button>
    </div>
  );
}

export default Map

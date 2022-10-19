import React from 'react'
import { play, rect1, rect3, vid } from '../images'

const Banner = () => {
  return (
    <div className="flex flex-col-reverse justify-center items-center lg:space-x-4 lg:flex-row my-20 2xl:max-w-7xl mx-auto">
      <section className="w-full lg:w-1/2 relative mb-20">
        <div className="relative z-40 pl-10">
          <div className="w-[77px] h-[77px] bg-[#FFFFFF] absolute top-1/2 left-1/3 rounded-full flex items-center justify-center shadow-sm">
            <img src={play} alt="" />
          </div>
          <img src={vid} alt="" />
        </div>
        <div className='absolute -mt-48 left-4'>
          <img src={rect1} alt="" />
        </div>
        <div className='absolute left-20 -top-10'>
          <img src={rect3} className='' alt="" />
        </div>
      </section>
      <section className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-20 lg:mb-0">
        <div className="h-[424px] w-[599px] bg-black" />
      </section>
    </div>
  );
}

export default Banner

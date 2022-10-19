import React from 'react'
import { rect1, rect2, woman } from '../images'

const Picture = () => {
  return (
    <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[500px] my-10 bg-[#ECECEC] px-1 py-20 lg:p-24">
      <section className='2xl:max-w-7xl mx-auto'>
        <div className="hidden sm:inline-flex absolute left-16 sm:left-10 top-24 sm:top-32 lg:top-52 2xl:left-[35rem]">
          <img src={rect1} className="w-28 sm:w-40 lg:w-full" alt="" />
        </div>
        <div className="absolute z-30 mx-2">
          <img src={woman} className='w-full' alt="" />
        </div>
        <div className="hidden sm:inline-flex absolute top-16 lg:top-7 left-[20rem] lg:left-[30em] 2xl:left-[68rem] 2xl:top-14">
          <img src={rect2} alt="" className="w-32 sm:w-full" />
        </div>
      </section>
    </div>
  );
}

export default Picture

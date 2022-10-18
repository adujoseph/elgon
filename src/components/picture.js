import React from 'react'
import { rect1, rect2, woman } from '../images'

const Picture = () => {
  return (
    <div className="relative w-full h-[350px] lg:h-[500px] my-10 bg-[#ECECEC] p-20 lg:p-24 ">
      <div className="absolute left-10 top-32 lg:top-52">
        <img src={rect1} className="w-40 lg:w-full" alt="" />
      </div>
      <div className="absolute z-30 mx-2">
        <img src={woman} alt="" />
      </div>
      <div className="absolute top-10 lg:top-7 left-[20rem] lg:left-[30em]">
        <img src={rect2} alt="" className="w-full" />
      </div>
    </div>
  );
}

export default Picture

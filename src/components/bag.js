import React from 'react'
import { bag, rect4, rect5 } from '../images';

const Bag = () => {
  return (
    <div className="flex flex-col-reverse justify-center px-10 items-center lg:space-x-4 lg:flex-row my-20">
      <section className="relative lg:w-1/2 bg-black h-[300px] sm:h-[424px] w-[300px] sm:w-[599px] 2xl:pl-32 2xl:w-[550px]">
        <div className="absolute flex top-1/3 sm:top-1/2 left-[20%] sm:left-1/4">
          <p className="text-2xl text-white">Furnishings by Louis Vuitton.</p>
        </div>
      </section>
      <section className="w-full lg:w-1/2 relative mb-20 ">
        <div className="relative z-40 pl-10 2xl:pl-80">
          <img src={bag} alt="" />
        </div>
        <div className="absolute -mt-48 -right-5 2xl:right-80">
          <img src={rect5} alt="" />
        </div>
        <div className="absolute  left-1 -top-14 2xl:left-72">
          <img src={rect4} className="" alt="" />
        </div>
      </section>
    </div>
  );
}

export default Bag

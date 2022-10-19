import React from 'react'
import { gym, house } from '../images';

const BigCard = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-black space-y-10">
      <section>
        <img src={gym}  className='w-full' alt="" />
      </section>
      <section className=" flex space-y-5 items-center flex-col lg:space-x-3 lg:flex-row 2xl:max-w-7xl mx-auto">
        <div className="lg:w-1/2 ">
          <img src={house} className='' alt="" />
        </div>
        <div className=" h-max sm:h-[343px] p-10 lg:w-1/2 bg-white rounded-lg ">
          <h3 className="text-lg  sm:text-2xl mb-7 font-bold">
            The Perfect Transit Hub
          </h3>
          <p>
            Located in the heart of Hamilton’s transportation hub, residents at
            The Design District will find themselves just steps away from the
            upcoming LRT and Hamilton GO Train. Hamilton’s strategic location
            and infrastructure supports all forms of transportation, cars,
            trains, planes and boats. A $3.4 Billion investment from the
            Provincial and Federal Government for the future Hamilton LRT was
            announced in 2021. Residents will travel at ease throughout the
            city, minutes away from major Highways, GO train, Hamilton
            International Airport and the future Hamilton LRT.
          </p>
        </div>
      </section>
    </div>
  );
}

export default BigCard

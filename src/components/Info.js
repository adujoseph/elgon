import React from "react";

const Info = () => {
  const dummy = [
    {
      id: 1,
      title: "Location",
      number: "41 Wilson St W",
    },
    {
      id: 2,
      title: "Number of Units",
      number: "931",
    },
    {
      id: 3,
      title: "Total Floors/Stories",
      number: "31",
    },
    {
      id: 4,
      title: "Towers",
      number: "3",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row bg-[#ECECEC] p-6 lg:items-center">
      <div className="pl-5 sm:pl-10 lg:w-2/3">
        <h2 className="font-black mb-10 mt-4 text-xl lg:text-3xl">PROJECT INFO</h2>
        <p className="mb-4 text-base text-[#262626]">
          Located in the heart of Hamilton’s transportation hub, residents at
          The Design District by Emblem will find themselves just steps away
          from the upcoming LRT and Hamilton GO Train.
        </p>

        <p className="mb-4 text-base text-[#262626]">
          Hamilton’s strategic location and infrastructure supports all forms of
          transportation, cars, trains, planes and boats. A $3.4 Billion
          investment from the Provincial and Federal Government for the future
          Hamilton LRT was announced in 2021.
        </p>
        <p className="mb-4 text-base text-[#262626]">
          Residents will travel at ease throughout the city, minutes away from
          major Highways, GO train, Hamilton International Airport and the
          future Hamilton LRT.
        </p>
      </div>
      <div className="lg:w-1/3 m-4 sm:m-8 bg-black rounded-lg text-white p-4 sm:p-8">
        <h2 className="text-xl mb-10 font-semibold">More Details</h2>
        {dummy.map((data) => (
          <div key={data.id} className="flex justify-between items-center">
            <p>{data.title}</p>
            <p>{data.number}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;

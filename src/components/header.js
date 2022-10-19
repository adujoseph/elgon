import React, {useState} from "react";
import { logo, logo1, sky } from "../images";

const radio_button = [
  { id: 1, name: "I'm Not an Agent" },
  { id: 2, name: "I'm an Agent" },
]

const Header = () => {
  const [selected, setSelected] = useState();

   
  return (
    <header className="flex flex-col sm:flex-row mb-10">
      <div className="bg-[#ECECEC] p-8 sm:w-1/2">
        <img
          src={logo1}
          className="h-7 lg:h-10 p-1 w-full object-contain"
          alt=""
        />
        <form className="lg:mx-10 mt-7 bg-white rounded-lg p-8">
          <h4 className="text-lg sm:text-xl font-bold text-center">
            EMBLEM x Furnishings by Louis Vuitton.
          </h4>
          <div className="flex space-y-2 flex-col my-2">
            <label htmlFor="name" className="capitalize font-bold">
              name
            </label>
            <aside className="w-full flex space-y-4 flex-col lg:space-y-0 lg:space-x-5 lg:flex-row lg:items-center">
              <input
                type="text"
                className="input lg:w-1/2"
                required
                placeholder="First name"
              />
              <input
                type="text"
                className="input lg:w-1/2"
                required
                placeholder="Last name"
              />
            </aside>
          </div>
          <div className="flex space-y-2 flex-col my-2">
            <label className="capitalize font-bold" htmlFor="phone">
              Phone
            </label>
            <input className="input" type="number" placeholder="" />
          </div>
          <div className="flex space-y-2 flex-col my-2">
            <label className="capitalize font-bold" htmlFor="Email">
              Email
            </label>
            <input required className="input" type="email" placeholder="" />
          </div>
          <div className="">
            <label className="capitalize font-bold" htmlFor="Agent">
              Agent
            </label>
            <aside>
              {radio_button.map((radio, i) => (
                <div key={i}>
                  <input className="input mr-2" onChange={() => setSelected(radio.id)} type="radio" name="" id="" checked={radio.id === selected ? true : false}/>
                  {radio.name}
                </div>
              ))}
            </aside>
          </div>
          <div className="my-2">
            <label className="capitalize font-bold" htmlFor="Submit">
              Submit
            </label>
            <aside>
              <input className="input  mr-2" required type="checkbox" />
              By clicking on Submit, I agree to the Privacy Policy and Terms of
              Use
            </aside>
          </div>
          <div className="flex items-center justify-center">
            <button className="rounded-xl w-max py-1.5 px-6 text-white bg-black m-3">
              GET VIP ACCESS
            </button>
          </div>
        </form>
      </div>
      <div className="relative bg-white sm:w-1/2 p-8">
        <div className="absolute right-0 px-5">
          <img src={logo} alt="" className="h-7 object-contain w-full" />
        </div>
        <div className="mt-20 lg:mt-0 lg:absolute lg:top-28 lg:right-40 lg:z-20 lg:-ml-10 2xl:mr-40 2xl:right-20 2xl:top-10">
          <img src={sky} alt="" className="w-full 2xl:w-[90%]" />
        </div>
      </div>
    </header>
  );
};

export default Header;

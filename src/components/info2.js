import React from 'react'
import { arrow } from '../images';

const Info2 = () => {
    const dummy = [
        {
            id: 1,
            title:'Outdoor Pool'
        },
        {
            id: 2,
            title:'Pool Lounge'
        },
        {
            id: 3,
            title:'Fully equipped fitness centre'
        },
        {
            id: 4,
            title:'Yoga Studio'
        },
        {
            id: 5,
            title:'Party Room'
        },
        {
            id: 6,
            title:'Co-working space'
        },
        {
            id: 7,
            title: 'Meeting Rooms'
        },
        {
            id: 8,
            title:'{Outdoor Bar & Lounge'
        },
        {id: 9,
            title:'Outdoor Dining'
        },
        {
            id: 10,
            title:'Outdoor BBQ'
        },
        {
            id: 11,
            title:'3 Designer Lobbies'
        },
        {
            id: 12,
            title:'Lobby Lounge'
        },
        {
            id: 13,
            title:'24-hour Concierge'
        },
        {
            id: 14,
            title:'Visitor Parking'
        },






    ]
  return (
    <div className="p-10 bg-[#ECECEC]">
      <h3 className="text-2xl font-bold">State of the art amenities.</h3>
      <div className="my-10  grid sm:grid-cols-2">
        {dummy.map((data) => (
          <div key={data.id} className="flex space-x-2 m-2">
            <img src={arrow} alt="" />
            <p>{data.title}</p>
          </div>
        ))}
      </div>
      <div>
        <p>
          Introducing The Design District, GTA’s most anticipated development,
          featuring an innovative design by award-winning interior designer
          Burdifilek. This 31-storey designer condominium will feature
          furnishings by Louis Vuitton making it the first of its kind in
          Hamilton. Located at 41 Wilson St (Wilson St and James St North) the
          development has over 19,175 sq. ft. of amenities. An inspiring new
          lifestyle in Hamilton where contemporary architecture reaches new
          heights. A Forever Moment.
        </p>
      </div>
    </div>
  );
}

export default Info2

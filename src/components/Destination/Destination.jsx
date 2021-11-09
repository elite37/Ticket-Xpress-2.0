import React from "react";

const Destination = ({
  location,
  price,
  time,
  destinationImage,
  travelIcon,
  destinationImageAlt,
}) => {
  return (
    <div className='destination'>
      <div className='dest-img'>
        <img src={destinationImage} alt={destinationImageAlt} />
      </div>
      <div className='dest-card'>
        <div className='area'>
          <span>
            <h4>{location}</h4>
          </span>
          <span>
            <h4>{price}</h4>
          </span>
        </div>
        <div className='time'>
          <img src={travelIcon} alt='' />
          <h4>{time}</h4>
        </div>
      </div>
    </div>
  );
};

export default Destination;

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
    <div class='destination'>
      <div class='dest-img'>
        <img src={destinationImage} alt={destinationImageAlt} />
      </div>
      <div class='dest-card'>
        <div class='area'>
          <span>
            <h4>{location}</h4>
          </span>
          <span>
            <h4>{price}</h4>
          </span>
        </div>
        <div class='time'>
          <img src={travelIcon} alt='' />
          <h4>{time}</h4>
        </div>
      </div>
    </div>
  );
};

export default Destination;

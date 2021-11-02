import React from "react";

function ServiceCard({ serviceIcon, serviceTitle, serviceBody }) {
  return (
    <div className='service__card'>
      <div className='service__icon'>
        <img src={serviceIcon} alt='' />
      </div>
      <h4 className='service__card-title'>{serviceTitle}</h4>
      <p className='service__card-body'>{serviceBody}</p>
    </div>
  );
}

export default ServiceCard;

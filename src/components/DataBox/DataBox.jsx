import React from "react";
import "./DataBox.css";

function DataBox({ Icon, figure, title, percentage, Arrow, decrease }) {
  return (
    <div className='databox'>
      <div className='databox__top'>
        <div className='databox__icon'>
          <div className='icon__container'>
            <Icon fontSize='large' />
          </div>
        </div>
        <div className='databox__details'>
          <h2>{figure}</h2>
          <p>{title}</p>
        </div>
      </div>
      <div className='databox__bottom'>
        <p className={`${decrease && "decrease__text"}`}>
          {percentage}% <Arrow />{" "}
        </p>
      </div>
    </div>
  );
}

export default DataBox;

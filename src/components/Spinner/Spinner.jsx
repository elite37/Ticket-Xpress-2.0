import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className='spinner'>
      <div className='spinner__container'>
        <span className='spinner__ball'></span>
        <span className='spinner__ball'></span>
        <span className='spinner__ball'></span>
      </div>
    </div>
  );
};

export default Spinner;

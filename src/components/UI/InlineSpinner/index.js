import React from 'react';
import circle from './circle.png'
import s from './.module.css'

const _ = React.forwardRef(
    ({fill, width}, ref) => {
        return (
          <img
            width={`${10}px`}
            className={`${s.rotating}`}
            alt='spinner circle'
            src={circle}
            ref={ref}
          />
        );
    }
)

export default _
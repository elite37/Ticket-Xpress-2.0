import Passenger from './Passenger'
import passengerTypes from './passengerTypes.json'
import styles from './.module.css'
import CaretLabel from '../../UI/CaretLabel'
import { useState } from 'react'

export default function Passengers() {
  const [open, setOpen] = useState(false)

    return (
      <>
        <CaretLabel
          onClick={() => setOpen(s => !s)}
          label={() => <p>Number of Passengers</p>}
        />
        {open && (
          <div className={`${styles.all}`}>
            {passengerTypes.map((passengerType) => (
              <Passenger key={passengerType.code} type={passengerType} />
            ))}
          </div>
        )}
      </>
    );
}
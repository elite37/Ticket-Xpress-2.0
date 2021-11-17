import Passenger from './Passenger'
import { useDispatch, useSelector } from 'react-redux'
import { passengersOpen } from '../flightStoreSlice'
import passengerTypes from './passengerTypes.json'
import Caret from '../../UI/Caret'
import styles from './.module.css'
import CaretLabel from '../../UI/CaretLabel'

export default function Passengers() {
    const dispatch = useDispatch()
    const flightState = useSelector((state)=>state.flight)

    return (
      <>
        <CaretLabel
          onClick={() => dispatch(passengersOpen())}
          label={() => <p>Number of Passengers</p>}
        />
        {flightState.passengersOpen && (
          <div className={`${styles.all}`}>
            {passengerTypes.map((passengerType) => (
              <Passenger key={passengerType.code} type={passengerType} />
            ))}
          </div>
        )}
      </>
    );
}
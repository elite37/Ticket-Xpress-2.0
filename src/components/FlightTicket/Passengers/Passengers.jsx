import Passenger from './Passenger'
import passengerTypes from './passengerTypes.json'
export default function Passengers(props) {
    return (
        <>
            {passengerTypes.map(passengerType => (
                <Passenger
                    text={passengerType.text}
                />
            ))}
        </>
    )
}
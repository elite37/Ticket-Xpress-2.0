import styles from './.module.css'
import FlightLeg from './FlightLeg'

export default function _({ itn }) {
    return (
        <div className={`${styles.itn}`}>
            <FlightLeg
                flight={itn}
            />
        </div>
    )
}
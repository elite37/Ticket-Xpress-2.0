import styles from './.module.css'

export default function Passenger(props) {
    return (
        <>
            <input
                className={`${styles.numInput}`}
                type='number'
                onChange={(e)=>{dispatch(props.text, e.target.value)}}
            />
            <p>{props.text}</p>
        </>
    )
}
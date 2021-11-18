import styles from './.module.css'

export default function Date(props) {
  return (
    <div className={`${styles.flightform__date}`}>
        <label htmlFor={props.id}>{props.label}</label>
        <input
          type="date"
          id={props.id || ''}
          onChange={(e) => {
            props.onChange(e.target.value);
          }}
        />
    </div>
  );
}

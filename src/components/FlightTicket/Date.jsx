import styles from './.module.css'

export default function Date(props) {
  return (
    <div className={`${styles.flightform__date}`}>
      <div className="">
        <label htmlFor="">{props.label}</label>
        <input
          type="date"
          name={props.name || props.label}
          id={props.id || null}
          placeholder={props.placeholder}
          onChange={(e) => {
            props.onChange(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

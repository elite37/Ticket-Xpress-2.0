import { flightform__date } from "../.module.css";

export default (props) => {
  const idOrLabel = props.id || props.label || "";
  return (
    <div className={`${flightform__date}`}>
      <label htmlFor={idOrLabel}>{props.label}</label>
      <input
        type="date"
        name={props.name || props.label}
        id={idOrLabel}
        placeholder={props.placeholder}
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
      />
    </div>
  );
};

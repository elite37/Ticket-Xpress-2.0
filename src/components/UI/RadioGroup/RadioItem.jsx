import _s from './.module.css'

export default function _({ value, name, text, onChange, checked }) {
  return (
    <div className={`${_s.entry}`}>
      <input
        type="radio"
        checked={checked}
        onChange={() => onChange(value)}
        id={value}
        name={name}
        value={value}
      />
      <label htmlFor={value}>{text}</label>
    </div>
  );
}

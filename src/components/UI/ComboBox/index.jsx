import React, {useRef} from "react";
import styles from './.module.css'

export default function ComboBox(props) {
  const listboxRef = useRef(null)
  const listbox = listboxRef.current

  const textInputRef = useRef(null)
  const textInput = textInputRef.current

  return (
    <div className={`${styles.combobox}`}>
      <label
        _id="ex2-label"
        htmlFor={props.id}
        className={`${styles.comboboxLabel}`}
      >
        {props.label}
      </label>

      <div className={`${styles.comboboxWrapper}`}>
        <div
          _id="ex2-combobox"
        >
          <input
            type="text"
            id={props.id}
            ref={textInput}
            placeholder={props.placeholder}
            onBlur={() => {
              if (listbox) listbox.classList.add(styles.hidden);
            }}
            onInput={(e) => {
              if (e.target.value.length >= 3) {
                props.getItems(e.target.value);
                if (listbox) listbox.classList.remove(styles.hidden);
              }
            }}
          />
        </div>
        <ul
          _id="ex2-listbox"
          ref={listboxRef}
          className={`${styles.listbox}`}
        >
          {props.items &&
            props.items.map((item) => (
              <li
                className={`${styles.result}`}
                key={item.id}
                onClick={() => {
                  listbox.classList.add(styles.hidden);
                  props.onSelect(item.id);
                }}
              >
                {item.text}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

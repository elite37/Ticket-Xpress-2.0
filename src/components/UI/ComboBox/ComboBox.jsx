import React, {useRef} from "react";
import styles from './ComboBox.module.css'

export default function ComboBox(props) {
  const listboxRef = useRef(null)
  const listbox = listboxRef.current

  const textInputRef = useRef(null)
  const textInput = textInputRef.current

  return (
    <>
    {/* <div className={`${styles.sm}`}>..something</div> */}
      <label id="ex2-label" className={`${styles.comboboxLabel}`}>
        {props.label}
      </label>

      <div className={`${styles.comboboxWrapper}`}>
        <div id="ex2-combobox">
          <input
            ref={textInput}
            placeholder={props.placeholder}
            onBlur={()=>{
              listbox.classList.add(styles.hidden)
            }}
            onInput={(e) => {
              if (e.target.value.length >= 3) {
                props.getItems(e.target.value)
                listbox.classList.remove(styles.hidden)
              }
            }}
            type="text"
            id="ex2-input"
          />
        </div>
        <ul
          id="ex2-listbox"
          ref={listboxRef}
          className={`${styles.listbox}`}>
          {props.items.map((item) => (
            <li
              className={`${styles.result}`}
              key={item.id}
              onClick={() => {
                listbox.classList.add(styles.hidden)
                props.onSelect(item.id);
              }}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

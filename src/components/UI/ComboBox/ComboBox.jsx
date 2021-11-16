import React from "react";
import styles from './ComboBox.module.css'

export default function ComboBox(props) {
  return (
    <>
      <label id="ex2-label" className="combobox-label">
        {props.label}
      </label>

      <div className="combobox-wrapper">
        <div id="ex2-combobox">
          <input
            placeholder={props.placeholder}
            onChange={(e) => {
              props.getItems(e.target.value);
            }}
            type="text"
            id="ex2-input"
          />
        </div>
        <ul id="ex2-listbox" className="listbox hidden">
          {props.items.map((item) => (
            <li
              key={item.id}
              onClick={() => {
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

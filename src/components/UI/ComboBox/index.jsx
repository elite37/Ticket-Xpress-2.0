import React, {
  useRef,
  useState,
} from "react";
import styles from "./.module.css";

export default function ComboBox(
  props
) {
  const [hidden, setHidden] =
    useState(true);
  const listboxRef = useRef(null);
  const listbox = listboxRef.current;

  const textInputRef = useRef(null);
  const textInput =
    textInputRef.current;

  // init
  const [current, setCurrent] =
    useState({});

  const select = (item) => {
    hide();
    setCurrent(item);
    props.onSelect(item.id);
  };

  const onTextInput = (e) => {
    if (e.target.value.length >= 3) {
      props.getItems(e.target.value);
      show();
    }
  };

  const show = () => {
    setHidden(false);
  };

  const hide = () => {
    setHidden(true);
  };

  const inputKeyDown = (e) => {
    switch (e.code) {
      case "Escape":
        hide();
        break;
      case "ArrowUp":
        selectAbove();
        break;
      case "ArrowDown":
        selectBelow();
        break;
      default:
    }
  };

  return (
    <div
      className={`${styles.combobox}`}
    >
      <label
        _id="ex2-label"
        htmlFor={props.id}
        className={`${styles.comboboxLabel}`}
      >
        {props.label}
      </label>

      <div
        className={`${styles.comboboxWrapper}`}
      >
        <div _id="ex2-combobox">
          <input
            type="text"
            id={props.id}
            ref={textInput}
            onKeyDown={inputKeyDown}
            placeholder={
              props.placeholder
            }
            onBlur={() => {
              hide();
            }}
            onInput={onTextInput}
          />
        </div>
        <ul
          _id="ex2-listbox"
          ref={listboxRef}
          className={`${
            styles.listbox
          } ${
            hidden
              ? styles.hidden
              : ""
          }`}
        >
          {props.items &&
            props.items.map(
              (item, i) => (
                <li
                  className={`${
                    styles.result
                  } ${
                    props.autoSelect &&
                    i === 0
                      ? styles.focused
                      : ""
                  }`}
                  key={item.id}
                  onClick={() => {
                    select(item);
                  }}
                >
                  {item.text}
                </li>
              )
            )}
        </ul>
      </div>
    </div>
  );
}

import React, { useRef, useState } from "react";
import InlineSpinner from "../InlineSpinner";
import styles from "./.module.css";

export default function ComboBox(props) {
  const [hidden, setHidden] = useState(true);
  const listboxRef = useRef(null);

  const textInputRef = useRef(null);
  const textInput = textInputRef.current;

  // init
  const [getting, setGetting] = useState(false);
  const [current, setCurrent] = useState({});

  const updateValue = (v) => {
    if (textInput) {
      textInput.value = v
    }
  }

  const select = (item, _hide = false) => {
    console.log(".i.click", item);
    if (!item) return;
    if (_hide) hide();
    setCurrent(item);
    updateValue(item.text)
    props.onSelect({ value: item.id });
  };

  const onTextInput = (e) => {
  console.log(".d", __dirname);
  if (e.target.value.length >= 3) {
    setGetting(true);
    props.getItems(e.target.value).then(() => setGetting(false));
    if (props.items && props.autoSelect) select(props.items[0]);
    show();
  }
  };

  const show = () => {
    setHidden(false);
  };

  const hide = () => {
    setHidden(true);
  };

  // index
  // check index
  // increase index
  // get index from props.items
  // select index
  const selectNext = async (direction) => {
    // let item = props.items.find(i => i.id === current.id)
    let index = props.items.indexOf(current);
    index = direction ? index - 1 : index + 1;
    if (direction && index === 0) {
      if (props.loop) {
        index = props.items.length;
      } else {
        return;
      }
    } else if (!direction && index === props.items.length) {
      if (props.loop) {
        index = 0;
      } else {
        return;
      }
    }
    let next = props.items[index];
    select(next);
  };

  const inputKeyDown = (e) => {
    switch (e.code) {
      case "Escape":
        hide();
        break;
      case "ArrowUp":
        (async () => {
          e.preventDefault();
          await selectNext(true);
        })();
        break;
      case "ArrowDown":
        (async () => {
          e.preventDefault();
          await selectNext();
        })();
        break;
      case "Enter":
        hide();
        break;
      default:
      //
    }
  };

  return (
    <div className={`${styles.combobox}`}>
      <div>
        <label htmlFor={props.id} className={`${styles.comboboxLabel}`}>
          {props.label}
        </label>
        {getting && <InlineSpinner width="11" fill="#87CEEB" />}
      </div>
      <div className={`${styles.comboboxWrapper}`}>
        <input
          autoComplete="off"
          type="text"
          id={props.id}
          ref={textInput}
          className={`${styles.input}`}
          onFocus={() => show()}
          onKeyDown={inputKeyDown}
          placeholder={props.placeholder}
          // onBlur={() => {
          //   hide();
          // }}
          onInput={onTextInput}
        />
        <ul _id="ex2-listbox" ref={listboxRef} className={`${styles.listbox} ${hidden ? styles.hidden : ""}`}>
          {props.items &&
            props.items.map((item) => (
              <li
                className={`${styles.result} ${
                  current && item && current.id === item.id ? styles.focused : ""
                }`}
                key={item.id}
                onClick={() => {
                  select(item, true);
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

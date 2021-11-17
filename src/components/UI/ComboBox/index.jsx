import React, { useRef, useState } from "react";
import styles from "./.module.css";

export default function ComboBox(props) {
  const [hidden, setHidden] = useState(true);
  const listboxRef = useRef(null);

  const textInputRef = useRef(null);
  const textInput = textInputRef.current;

  // init
  const [current, setCurrent] = useState({});

  const select = (item, _hide = false) => {
    if (!item) return;
    console.log(".c.select", item);
    if (_hide) hide();
    setCurrent(item);
    if (textInput) {
      textInput.value = item.text;
    }
    props.onSelect(item.id);
  };

  const onTextInput = (e) => {
    if (e.target.value.length >= 3) {
      if (props.items && props.autoSelect) select(props.items[0]);
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
      <label _id="ex2-label" htmlFor={props.id} className={`${styles.comboboxLabel}`}>
        {props.label}
      </label>

      <div className={`${styles.comboboxWrapper}`}>
        <div _id="ex2-combobox">
          <input
            autoComplete="off"
            type="text"
            id={props.id}
            ref={textInput}
            onFocus={() => show()}
            onKeyDown={inputKeyDown}
            placeholder={props.placeholder}
            onBlur={() => {
              hide();
            }}
            onInput={onTextInput}
          />
        </div>
        <ul _id="ex2-listbox" ref={listboxRef} className={`${styles.listbox} ${hidden ? styles.hidden : ""}`}>
          {props.items &&
            props.items.map((item, i) => (
              <li
                className={`${styles.result} ${
                  current && item && current.id === item.id ? styles.focused : ""
                }`}
                key={item.id}
                onClick={() => {
                  console.log(".i.click", item);
                  select(item, true);
                }}
                onMouseUp={() => {
                  console.log(".mo");
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

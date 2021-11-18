import RadioItem from "./RadioItem";
import { useState } from "react";
import CaretLabel from "../../UI/CaretLabel";
import _s from "./.module.css";

export default function _({
  collapse,
  name,
  title,
  options,
  checked,
  onChange,
  opened = true
}) {
  const [open, setOpen] = useState(opened);
  return (
    <form>
      {/* <fieldset> */}
      {collapse ? (
        <CaretLabel
          onClick={() => setOpen((_s) => !_s)}
          label={() => <legend>{title}</legend>}
        />
      ) : (
        <legend>{title}</legend>
      )}
      {open && (
        <div className={`${_s.all}`}>
          {options.map((option) => (
            <RadioItem
              name={name}
              checked={checked === option.value ? true : null}
              key={option.value}
              value={option.value}
              text={option.text}
              onChange={onChange}
            />
          ))}
        </div>
      )}
      {/* </fieldset> */}
    </form>
  );
}

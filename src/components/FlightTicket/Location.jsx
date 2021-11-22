import React, { useState } from "react";
import { api } from "../../utils/api";
import ComboBox from "../UI/ComboBox";

export default function _(props) {
  const [items, setItems] = useState([]);

  const search = async (value) => {
    if (!(value.length >= 3)) return
    let res = await api.get(`/sabre/geo/autocomplete?q=${value}`);
    setItems(res.items);
  };

  return (
    <ComboBox
      loop
      autoSelect
      placeholder={props.placeholder}
      onSelect={props.onSelect}
      getItems={search}
      items={items}
      id={props.id}
      label={props.label}
    />
  );
}

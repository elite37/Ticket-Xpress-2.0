import React, { useState } from "react";
import { api } from "../../utils/api";
import ComboBox from "../UI/ComboBox/ComboBox";

export default function Destination(props) {
  const [items, setItems] = useState([]);

  const search = async (value) => {
    if (!(value.length >= 3)) return
    let res = await api.get(`/sabre/geo/autocomplete?q=${value}`);
    console.log('..ag', res.items)
    setItems(res.items);
  };

  return (
    <ComboBox
      placeholder="City Or Airport"
      onSelect={props.onSelect}
      getItems={search}
      items={items}
    />
  );
}

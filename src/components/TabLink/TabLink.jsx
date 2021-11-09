import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./TabLink.css";

function TabLink({ route, name, Icon, active }) {
  const [state, setState] = useState("Overview");

  const handleClick = () => {
    setState(name);
  };

  return (
    <li className={`tab-list  ${state === name && "tab-list-active"}`}>
      <Link to={route} handleClick={handleClick}>
        {" "}
        <Icon /> <span>{name}</span>
      </Link>
    </li>
  );
}

export default TabLink;

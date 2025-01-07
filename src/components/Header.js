import React from "react";
import DropDown from "./DropDown";

const Header = ({ options, onSelect }) => {
  return (
    <header>
      <h1>Mercive BI Dashboards</h1>
      <DropDown options={options} onSelect={onSelect} />
    </header>
  );
};

export default Header;

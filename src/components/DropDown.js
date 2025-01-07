import React from "react";

const DropDown = ({ options, onSelect }) => {
  const handleChange = (e) => {
    const selectedOption = options.find(
      (option) => option.value === e.target.value
    );
    if (selectedOption) {
      onSelect(selectedOption.value, selectedOption.label);
    }
  };
  return (
    <select className="dropDown" onChange={handleChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default DropDown;

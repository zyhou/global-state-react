import React, { useState } from "react";

const SelectList = ({ items, value, onChange }) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);

  const onClick = event => {
    if (event.target.nodeName.toLowerCase() === "select") {
      return;
    }
    setIsOpenSelect(true);
  };

  const onChangeSelect = event => {
    onChange(event.target.value);
    setIsOpenSelect(false);
  };

  const Option = ({ item }) => <option value={item}>{item}</option>;

  return (
    <span
      className={`input-container ${isOpenSelect ? "active" : ""}`}
      onClick={onClick}
    >
      <span className={`placeholder  ${isOpenSelect ? "hidden" : ""}`}>
        {value}
      </span>
      <span className="input">
        <select
          className={`fancy-select ${!isOpenSelect ? "hidden" : ""}`}
          onChange={onChangeSelect}
        >
          {items.map(item => (
            <Option key={item} item={item} />
          ))}
        </select>
      </span>
    </span>
  );
};

export default SelectList;

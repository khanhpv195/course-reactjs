import React from "react";

const Input = (props) => {
  return (
    <div>
      <label>{props.labelText}</label>
      <input
        placeholder={props.placeholderText}
        onChange={props.handleOnChange}
      />
    </div>
  );
};

export default Input;

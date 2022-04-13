import React, { useState } from "react";

const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClickHandle}>{props.btnText}</button>
    </div>
  );
};

export default Button;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
const Title = styled.h1`
  font-size: "14px";
  color: ${(props) => (props.colorText ? props.colorText : "red")};
  background: ${(props) => (props.bg ? props.bg : "black")};
`;
const Text = (props) => {
  return (
    <div>
      <Title colorText={props.colorText} bg={props.bg}>
        {props.text}
      </Title>
    </div>
  );
};

export default Text;

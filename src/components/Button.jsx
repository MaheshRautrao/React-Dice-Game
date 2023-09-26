import React from "react";
import styled from "styled-components";

export const Button = ({ text, clickHandler }) => {
  return <ButtonDiv onClick={clickHandler}>{text}</ButtonDiv>;
};

export const OutlinedButton = ({ text, clickHandler }) => {
  return <OutlinedButtonDiv onClick={clickHandler}>{text}</OutlinedButtonDiv>;
};

const ButtonDiv = styled.button`
  padding: 10px;
  min-width: 150px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  background: #000000;
  color: #ffffff;
`;

const OutlinedButtonDiv = styled(ButtonDiv)`
  background: white;
  border: 1px solid black;
  color: black;
`;

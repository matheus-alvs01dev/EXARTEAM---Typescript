import { ReactElement } from "react";
import styled from "styled-components";
import React from "react";

const StyledButton = styled.button`
  background-color: #6278f7;
  border-radius: 10px;
  font-weight: 700;
  font-size: 18px;
  padding: 32px;
  border: none;
  cursor: pointer;
  color: #fff;
  margin: 32px 0;

  &:hover {
    color: #95ffd4;
  }
`;

interface ButtonProps{
  children: ReactElement | string;

}

const Button = (props: ButtonProps) => {
  return <StyledButton className="botao">{props.children}</StyledButton>;
};

export default Button;

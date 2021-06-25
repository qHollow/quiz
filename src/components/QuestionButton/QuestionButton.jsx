import React from "react";
import styled from "styled-components";

const Button = styled.button`
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  opacity: ${props => props.visible ? '1' : '0'};
  width: 120px;
  height: 40px;
  background-color: #5fd65f;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  align-self: flex-end;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

const QuestionButton = ({visible}) => {
  return <Button type="submit" visible={visible}>Next question</Button>;
};

export default QuestionButton;

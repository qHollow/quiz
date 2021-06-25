import React from 'react';
import styled from 'styled-components';

const Container = styled.article`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: center;
`;

const Difficulty = styled.span`
  display: block;
  position: absolute;
  align-self: flex-end;
  top: -15px;
`;

const Category = styled.div`
  font-size: 24px;
`

const QuestionTitle = ({category, question, difficulty}) => {
  return (
    <Container>
      <Category>{category}</Category>
      <Difficulty>{difficulty}</Difficulty>
      <h1>{question}</h1>
    </Container>
  );
};

export default QuestionTitle;
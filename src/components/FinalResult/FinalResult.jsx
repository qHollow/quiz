import React from "react";
import styled from "styled-components";

const arr = [
  {
    question: "What is the name of the 2016 mixtape released by Venezuelan electronic producer Arca??",
    difficulty: "hard",
    correct: "True",
    answer: {
      True: false,
      False: true,
    },
    type: "boolean",
  },
  {
    question: "What is the name of the 2016 mixtape released by Venezuelan electronic producer Arca?",
    difficulty: "easy",
    correct: "Halo",
    answer: {
      Battlefield: true,
      Borderlands: false,
      CoD: false,
      Halo: false,
    },
    type: "multiply",
  },
  {
    question: "What is the name of the 2016 mixtape released by Venezuelan electronic producer Arca?",
    difficulty: "easy",
    correct: "Halo",
    answer: {
      Battlefield: true,
      Borderlands: false,
      CoD: false,
      Halo: false,
    },
    type: "multiply",
  },
  {
    question: "What is the name of the 2016 mixtape released by Venezuelan electronic producer Arca?",
    difficulty: "medium",
    correct: "Halo",
    answer: {
      Battlefield: true,
      Borderlands: false,
      CoD: false,
      Halo: true,
    },
    type: "multiply",
  },
];


const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 20px 0;
`;

const Header = styled.h4`
  width: 100%;
`;

const Difficulty = styled.span`
  position: absolute;
  top: -15px;
  right: 0;
`;

const Label = styled.label`
  background-color: ${props => (props.bgcolor ? '#42d442' : '#fd3e3e')};
  margin: 10px 0;
  width: 100%;
  border-radius: 5px;
`;

const obj = {
  'easy': 1,
  'medium': 2,
  'hard': 3
};

const sortedByDiff = (a, b) => {
  const aDiff = a.difficulty;
  const bDiff = b.difficulty;
  return obj[aDiff] - obj[bDiff];
};

const FinalResult = ({allAnswers}) => {
  return (
    <>
      <h1>Your Choices: </h1>
      {
        allAnswers.sort(sortedByDiff).map(el => (
          <Section key={el.question}>
            <Header>{el.question}</Header>
            <Difficulty>{el.difficulty}</Difficulty>
            {
              Object.keys(el.answer).map(elem => (
                <Label key={elem} bgcolor={elem === el.correct ? true : false}>
                  <input 
                    type={el.type === 'boolean' ? 'radio' : 'checkbox'}  
                    defaultChecked={el.answer[elem] === true ? true : false}/>
                  {elem}
                </Label>
              ))
            }
          </Section>
        ))
      }
    </>
  );
};

export default FinalResult;

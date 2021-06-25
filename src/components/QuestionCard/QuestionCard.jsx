import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

import QuestionTitle from "../QuestionTitle";
import QuestionBool from "../QuestionBool";
import QuestionMulti from "../QuestionMulti";
import QuestionButton from "../QuestionButton";
import FinalResult from "../FinalResult";

const Container = styled.form`
  width: 1000px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
`;

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const QuestionCard = ({ data, nextPage, allAnswers, final }) => {
  const {
    category,
    question,
    correct_answer: correct,
    incorrect_answers: incorrect,
    difficulty,
    type,
  } = data;

  const answers = useMemo(() => shuffleArray([correct, ...incorrect]), [data]);

  const [answer, setAnswer] = useState({});

  useEffect(() => {
    setAnswer(answers.reduce((obj, el) => ({ ...obj, [el]: false }), {}));
  }, [answers]);

  let visible = Object.values(answer).some((el) => el === true);

  console.log(visible);

  return (
    <Container
      onSubmit={(e) =>
        nextPage(e, { question, correct, answer, difficulty, type })
      }
    >
      {final ? (
        <FinalResult allAnswers={allAnswers} />
      ) : (
        <ViewQuestions
          category={category}
          question={question}
          difficulty={difficulty}
          answer={answer}
          answers={answers}
          setAnswer={setAnswer}
          type={type}
          visible={visible}
        />
      )}
    </Container>
  );
};

const ViewQuestions = ({
  category,
  question,
  difficulty,
  answers,
  answer,
  setAnswer,
  type,
  visible
}) => {
  return (
    <>
      <QuestionTitle
        category={category}
        question={question}
        difficulty={difficulty}
      />
      {type === "boolean" ? (
        <QuestionBool
          answers={answers}
          userAnswer={answer}
          setUserAnswer={setAnswer}
        />
      ) : (
        <QuestionMulti
          answers={answers}
          userAnswer={answer}
          setUserAnswer={setAnswer}
        />
      )}
      <QuestionButton visible={visible}/>
    </>
  );
};

export default QuestionCard;

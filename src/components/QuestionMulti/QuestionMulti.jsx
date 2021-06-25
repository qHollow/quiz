import React from 'react';



const QuestionMulti = ({answers, userAnswer, setUserAnswer}) => {


  const changeHandle = ({target}) => {
    const {id} = target;
    setUserAnswer({...userAnswer, [id]: !userAnswer[id]});
  };

  const viewAnswers = answers.map(el => 
     (
      <label key={el}>
        <input type="checkbox" name="answer" onChange={changeHandle}  id={el} checked={userAnswer[el] || false} />
        {el}
      </label>
    )
  );

  return (
    <>
      {viewAnswers}
    </>
  );
};

export default QuestionMulti;
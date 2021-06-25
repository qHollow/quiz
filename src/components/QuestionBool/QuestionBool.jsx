import React from 'react';

const QuestionBool = ({answers, userAnswer, setUserAnswer}) => {
  
  const handleChange = ({target}) => {
    const {id} = target;
    const tmp = {...userAnswer};

    for(let key in tmp) {
      if(tmp.hasOwnProperty(key)) {
        tmp[key] = false;
      }
    }
    tmp[id] = !userAnswer[id];
    setUserAnswer(tmp);
  };

  const viewAnswers = answers.map(el => {
    return (
      <label key={el}>
        <input type="radio" name="answer" value={el} id={el} onChange={handleChange} checked={userAnswer[el] || false}/>
        {el}
      </label>
    );
  });

  return (
    <>
      {viewAnswers}
    </>
  );
};

export default QuestionBool;
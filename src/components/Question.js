import React from 'react';

const Question = ({ question, options, handleAnswer }) => {
  return (
    <div>
      <h3>{question}</h3>
      {options.map((option, index) => (
        <button key={index} onClick={() => handleAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Question;

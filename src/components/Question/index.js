import React from "react";
import "./index.css";

const Question = ({ currentQuestion, questionsData, handleAnswer,name }) => {
  return (
    <div>
        
      <p>Question {currentQuestion + 1}</p>
      <h3>{questionsData[currentQuestion].question}</h3>
      {questionsData[currentQuestion].options.map((option) => (
        <button className="button2" key={option} onClick={() => handleAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Question;

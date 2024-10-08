import React, { useState } from "react";
import "./index.css";

import Question from "../Question";
import Result from "../Result";

import NameInput from "../NameInput";
import QRCode from "../QRCode";

// Sample questions data
const questionsData = [
  { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
  { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
  { question: "What is the color of the sky?", options: ["Green", "Blue", "Red", "Yellow"], answer: "Blue" },
  { question: "Who was the first man to walk on the moon?", options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "John Glenn"], answer: "Neil Armstrong" },
  { question: "What is the chemical formula for water?", options: ["H2O", "CO2", "O2", "CH4"], answer: "H2O" },
  { question: "What is the smallest unit of life?", options: ["Molecule", "Cell", "Atom", "Organ"], answer: "Cell" }
];

// Main QuizGame component
const QuizGame = () => {
  const [name, setName] = useState("");             // Player's name
  const [currentQuestion, setCurrentQuestion] = useState(0);  // Current question index
  const [score, setScore] = useState(0);            // Player's score
  const [isGameStarted, setIsGameStarted] = useState(false);  // Game started flag
  const [isGameOver, setIsGameOver] = useState(false);   // Game over flag
  const [leaderboard, setLeaderboard] = useState([]);     // Leaderboard data
  
  // Handle when the player submits their answer
  const handleAnswer = (selectedOption) => {
    const currentQ = questionsData[currentQuestion];
    if (selectedOption === currentQ.answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionsData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsGameOver(true);
      // Update leaderboard
      const updatedLeaderboard = [...leaderboard, { name, score: score + 1 }];
      setLeaderboard(updatedLeaderboard.sort((a, b) => b.score - a.score));  // Sort by score descending
    }
  };

  // Reset game for a new round
  const resetGame = () => {
    setName("");
    setCurrentQuestion(0);
    setScore(0);
    setIsGameOver(false);
    setIsGameStarted(false);
  };

  return (
    <div>
        <h2 className="">Hello! {name}</h2>
        <div className="input_container">
            {!isGameStarted ? (
                // Collect user's name through NameInput component
                <>
                    <QRCode/>
                    <NameInput name={name} setName={setName} setIsGameStarted={setIsGameStarted} />
                </>
            ) : isGameOver ? (
                // Show result and leaderboard after the game is over using Result component
                <Result name={name} score={score} questionsData={questionsData} leaderboard={leaderboard} resetGame={resetGame} />
            ) : (
                // Display the current question using Question component
                <Question 
                name={name}
                currentQuestion={currentQuestion} 
                questionsData={questionsData} 
                handleAnswer={handleAnswer}
                />
            )}
        </div>
        
    </div>
    
  );
};

export default QuizGame;

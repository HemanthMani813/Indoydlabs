import React from "react";
import "./index.css";

const Result = ({ name, score, questionsData, leaderboard, resetGame }) => {

  return (
    <div>
        <div className="res_container">
            <div className="score_con">
                <h2>Game Over, {name}!</h2>
                <p>Your score: {score} / {questionsData.length}</p>
        
            </div>
            <div>
                <h2>Leaderboard</h2>
                <ul>
                {leaderboard.map((player, index) => (
                <li key={index}>
                    {player.name} - {player.score} points
                </li>
                ))}
            </ul>
            </div>
        </div>
      
      
      <button className="btn" onClick={resetGame}>Play Again</button>
    </div>
  );
};

export default Result;

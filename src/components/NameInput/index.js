import React from "react";
import "./index.css";

const NameInput = ({ name, setName, setIsGameStarted }) => {
  
  const handleStart = () => {
    if (name.trim()) {
      setIsGameStarted(true);
    }
  };

  return (
    <div className="input_container">
      <h1>Welcome to the Quiz Game</h1>
      <div className="sec_container">
        <input placeholder="Enter Your Name" class="input-style" name="text" value={name}
            onChange={(e) => setName(e.target.value)} type="text" />

        {/* <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        /> */}
        
        <button class="start_button" onClick={handleStart}>
        Start Game
        <div class="icon">
            <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
            ></path>
            </svg>
        </div>
        </button>

      </div>
      
    </div>
  );
};

export default NameInput;

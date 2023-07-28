import React, { useState } from "react";
import { styled } from "styled-components";
import Rules from "./Rules";

const RollDice = ({ currentDice, rollDice, setScore }) => {
  const resetScore = () => {
    setScore(0);
  };

  const [showRules, setShowRules] = useState(false);

  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/images/dice_${currentDice}.png`} alt="dice" />
      </div>
      <p>Click on Dice to roll</p>
      <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
      <Button onClick={() => setShowRules((prev) => !prev)}>
        {showRules ? "Hide" : "Show"} Rules
      </Button>
      {showRules && <Rules />}
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 24px;
  }
`;

const Button = styled.button`
  color: white;
  padding: 10px 18px;
  margin: 10px;
  background: #000000;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;
export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;

import React, { useState } from "react";
import styled from "styled-components";
import RulesDiv from "./RulesDiv";
import { Button, OutlinedButton } from "./Button";

const GamePage = () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const [showRules, setShowRules] = useState(false);
  const [rulesText, setRulesText] = useState("Show Rules");
  const [score, setScore] = useState(0);
  const [imageIndex, setImageIndex] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState();
  const [error, setError] = useState("");

  const handleResetScore = () => {
    setScore(0);
  };

  const handleShowRules = () => {
    if (showRules) {
      setShowRules(false);
      setRulesText("Show Rules");
    } else {
      setShowRules(true);
      setRulesText("Hide Rules");
    }
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("Please select a number");
      return;
    }

    let n = Math.floor(Math.random() * 6 + 1);
    setImageIndex(n);

    setScore((score) => {
      if (selectedNumber == n) {
        return score + n;
      } else return score - 2;
    });

    setSelectedNumber(undefined);
  };

  const selectNumberHandler = (num) => {
    setError("");

    setSelectedNumber(num);
    console.log(num);
  };

  return (
    <GameMainContainer>
      <UpperContainer>
        <ScoreDiv>
          <div style={{ fontSize: "50px" }}>{score}</div>
          <div>Total Score</div>
        </ScoreDiv>
        <SelectDiv>
          <Errordiv>{error}</Errordiv>
          <Numbers>
            {numbers.map((num) => {
              return (
                <NumberDiv
                  key={num}
                  onClick={() => selectNumberHandler(num)}
                  isSelected={num === selectedNumber}
                >
                  {num}
                </NumberDiv>
              );
            })}
          </Numbers>
          <TextDiv>Select Number</TextDiv>
        </SelectDiv>
      </UpperContainer>
      <LowerContainer>
        <img
          src={`./images/dice_${imageIndex}.png`}
          alt="dice image"
          onClick={rollDice}
        />
        <p>Click To Roll The Dice</p>
        <Button text="Reset Score" clickHandler={handleResetScore} />
        <OutlinedButton text={rulesText} clickHandler={handleShowRules} />
        {showRules && <RulesDiv />}
      </LowerContainer>
    </GameMainContainer>
  );
};

const GameMainContainer = styled.div`
  padding: 20px 80px;
`;

const UpperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 50px;
`;

const ScoreDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SelectDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: end;
`;

const Numbers = styled.div`
  display: flex;
  gap: 20px;
`;

const NumberDiv = styled.div`
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 5px;
  background: ${(props) => (props.isSelected ? "Black" : "White")};
  color: ${(props) => (props.isSelected ? "White" : "Black")};

  cursor: pointer;
`;

const TextDiv = styled.div``;

const LowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;

  img {
    width: 150px;
    cursor: pointer;
  }
`;

const Errordiv = styled.div`
  color: red;
`;

export default GamePage;

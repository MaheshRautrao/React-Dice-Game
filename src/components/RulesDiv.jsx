import React from "react";
import styled from "styled-components";

const RulesDiv = () => {
  return (
    <RulesDivComponent>
      <div>
        <p style={{ fontWeight: "bold" }}>How To Play Dice Game</p>
      </div>
      <div style={{ fontWeight: 400 }}>
        <p>Select any number</p>

        <p>Click on dice image </p>
        <p>
          After click on dice if selected number is equal to dice number you
          will get same point as dice
        </p>
        <p>If you get wrong guess then 2 points will be dedcuted</p>
      </div>
    </RulesDivComponent>
  );
};

const RulesDivComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #fbf1f1;
  padding: 20px;
`;

export default RulesDiv;

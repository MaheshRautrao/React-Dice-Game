import React from "react";
import styled from "styled-components";

const LandingPage = ({ gameStart }) => {
  return (
    <LandingMainContainer>
      <ImgContainer>
        <img src="./images/dices.png" alt="dice-image" />
      </ImgContainer>
      <HeadingContainer>
        <div>DICE GAME</div>
        <Button onClick={gameStart}>Play Now</Button>
      </HeadingContainer>
    </LandingMainContainer>
  );
};

const Button = styled.button`
  display: inline-block;
  color: #ffffff;
  font-size: 1.4em;
  padding: 0.25em 1em;
  border: none;
  border-radius: 3px;
  display: block;
  background-color: black;
  cursor: pointer;
`;

const LandingMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  height: 100vh;
  margin: auto;
`;

const ImgContainer = styled.div`
  img {
    width: 500px;
  }
`;

const HeadingContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;

  align-items: end;
  div {
    font-size: 86px;
  }
`;

export default LandingPage;

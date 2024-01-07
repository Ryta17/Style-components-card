import React from "react";
import "./App.css";
import styled from "styled-components";
import { StyledImg } from "./components/StyledImg";
import { StyledTitle } from "./components/StyledTitle";
import { StyledText } from "./components/StyledText";
import { StyledBtn } from "./components/StyledBtn";
import { myTheme } from "./styles/Theme.styled";

function App() {
  return (
    <div className="App">
      <Card>
        <StyledImg></StyledImg>
        <StyledTitle>Headline</StyledTitle>
        <StyledText>
          Faucib. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
          ornare in venen.
        </StyledText>
        <StyledBtn btnType={"primary"}>See more</StyledBtn>
        <StyledBtn
          color={myTheme.colors.transparent}
          textColor={myTheme.colors.blue}
          btnType={"outlined"}
        >
          Save
        </StyledBtn>
      </Card>
    </div>
  );
}

export default App;

const Card = styled.div`
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: auto;
  padding: 10px;
`;

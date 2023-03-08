import React from 'react';
import Card from "./typescript/components";
import styled from "styled-components";

function App() {
  return (
      <Container>
          <MobileContainer>
              <Card title={"MAIN"} content={"JAVA"}/>
          </MobileContainer>
      </Container>
  );
}

const Container = styled.div`
  background-color: rgba(200, 200, 200, 0.2);
  width: 100vw;
  // height: calc(var(--vh, 1vh) * 100);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Pretendard;
`

const MobileContainer = styled.div`
  width: 420px;
  min-height: 100vh;
  background-color: white;
  position: relative;
  overflow-x: hidden;
  @media screen and (max-width: 420px) {
    width: 100vw;
  }
`

export default App;

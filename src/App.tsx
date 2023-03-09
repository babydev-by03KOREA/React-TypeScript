import React, {useState} from "react";
// import Card from "./typescript/components";
import styled from "styled-components";
import {ChakraProvider} from "@chakra-ui/react";
import { ThemeProvider } from '@emotion/react'
import {extendedTheme, theme} from "./style";
import State from "./typescript/state";
import SelectBox from "./typescript/SelectBox";
import Join from "./typescript/join";
import AnodtherJoin from "./typescript/AnodtherJoin";

const checkArray = [
    {data: 0, text: "대학생"},
    {data: 1, text: "대학원생"},
    {data: 2, text: "취준생"},
    {data: 3, text: "직장인"},
];

const selectArray = [
    {data:0, text:"유쌍"},
    {data:1, text:"무쌍"}
];

function App() {
    const [job, setJob] = useState<number[]>([]);
    const [select, setSelected] = useState<number>(-1);
    /*DefaultValue > [[getter],[setter]]*/
    return (
        <Container>
            <MobileContainer>
                <ThemeProvider theme={theme}>
                    <ChakraProvider theme={extendedTheme}>
                        {/*<State arr={checkArray} item={job} setItem={setJob} />*/}
                        {/*<SelectBox textArr={selectArray} item={select} setItem={setSelected}/>*/}
                        <AnodtherJoin/>
                    </ChakraProvider>
                </ThemeProvider>
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
`;

const MobileContainer = styled.div`
  width: 420px;
  min-height: 100vh;
  background-color: white;
  position: relative;
  overflow-x: hidden;
  @media screen and (max-width: 420px) {
    width: 100vw;
  }
`;

export default App;

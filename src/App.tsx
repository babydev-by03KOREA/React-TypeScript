import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import styled from "styled-components";
import {ChakraProvider} from "@chakra-ui/react";
import {ThemeProvider} from "@emotion/react";
import {extendedTheme, theme} from "./style";
import {
    animal01,
    animal02,
    animal03,
    animal04,
    animal05,
    animal06,
    animal07,
    animal08,
    animal09,
    animal10,
    animal11,
    animal12
} from "./yeonpick/Animal";
import Store from "./store";
import {coffee, coin, plus} from "./yeonpick/Coin";
import Priority from "./Priority";
import Home from "./Home";
import Request from "./api/Request";

const checkArray = [
    {id: 0, text: "대학생"},
    {id: 1, text: "대학원생"},
    {id: 2, text: "취준생"},
    {id: 3, text: "직장인"},
];

const selectArray = [
    {id: 0, text: "유쌍"},
    {id: 1, text: "무쌍"},
];

const wantDating = [
    {id: "1번", text: "1번", ml: -3},
    {id: "2번", text: "2번", ml: 62},
    {id: "3번", text: "3번", ml: 60},
    {id: "4번 이상", text: "4번 이상", ml: 48},
];

const animalArray = [
    {id: 1, text: "강아지", root: animal01},
    {id: 2, text: "고양이", root: animal02},
    {id: 3, text: "곰", root: animal03},
    {id: 4, text: "기린", root: animal04},
    {id: 5, text: "늑대", root: animal05},
    {id: 6, text: "부엉이", root: animal06},
    {id: 7, text: "사자", root: animal07},
    {id: 8, text: "여우", root: animal08},
    {id: 9, text: "원숭이", root: animal09},
    {id: 10, text: "토끼", root: animal10},
    {id: 11, text: "햄스터", root: animal11},
    {id: 12, text: "호랑이", root: animal12},
];

const chargeArray = [
    {id: 1, point: "3,000", real: "₩ 3,000"},
    {id: 2, point: "10,000", real: "₩ 10,000"},
    {id: 3, point: "20,000", real: "₩ 19,000"},
    {id: 4, point: "30,000", real: "₩ 27,000"},
    // {id: 5, point: "50,000", real: "₩ 42,500"},
    // {id: 6, point: "80,000", real: "₩ 68,000"},
];

const buyArray = [
    {id: 1, img: plus, title: "선택조건 추가", description: "매칭에 반영할 이상형의 조건을 1개 더 추가해요", point: 3000},
    {id: 2, img: coffee, title: "스벅 아메리카노", description: "포인트를 기프티콘으로 교환할 수 있어요", point: 4000},
];

const collectArray = [
    {id: 1, img: coin, title: "연픽에서 리뷰 쓰기", price: "500"},
    {id: 2, img: coin, title: "추천한 친구가 가입하면", price: "2,000"},
];

const lowerArray = [
    {id: 3, title: "😐 프로필 Bad 평가 2회 이상"},
    {id: 3, title: "😐 3회 연속 매칭 의사 미등록"},
    {id: 3, title: "😐 상대 유저의 신고가 승인되었을 때"},
    {id: 3, title: "😐 성사 후 카카오톡 ID 검색허용 비활성화"},
    {id: 3, title: "😐 비매너 파트 (성사 후 일방적 차단 등)"},
];

const upperArray = [
    {id: 3, title: "🙂 프로필 Good 평가 2회"},
    {id: 3, title: "🙂 학교인증 & 자기소개 150자 이상"},
    {id: 1, title: "🙂 친구추천 1회"},
    {id: 2, title: "🙂 매칭 시 사용되는 포인트를 미리 충전해둔 경우"},
];

function App() {

    return (
        <Container>
            <MobileContainer>
                <ThemeProvider theme={theme}>
                    <ChakraProvider theme={extendedTheme}>
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/store"
                                       element={<Store buyArray={buyArray} chargeArray={chargeArray}
                                                       collectArray={collectArray}
                                                       page={"스토어"}/>}/>
                                <Route path="/priority"
                                       element={<Priority title={"우선순위란?"} id={1} upperArray={upperArray}
                                                          lowerArray={lowerArray}/>}/>
                                <Route path="/api" element={<Request/>}/>
                            </Routes>
                        </BrowserRouter>
                    </ChakraProvider>
                </ThemeProvider>
            </MobileContainer>
        </Container>
    );
}

const Container = styled.div`
  background-color: rgba(200, 200, 200, 0.2);
  width: 100vw;
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

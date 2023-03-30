import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Store from "./src/store";
import {coffee, coin, plus} from "./src/yeonpick/Coin";
import Priority from "./src/Priority";
import App from "./src/App";
import Home from "./src/Home";

const chargeArray = [
    {id: 1, point: "3,000", real: "₩ 3,000"},
    {id: 2, point: "10,000", real: "₩ 10,000"},
    {id: 3, point: "20,000", real: "₩ 19,000"},
    {id: 4, point: "30,000", real: "₩ 27,000"}
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

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/store"
                       element={<Store buyArray={buyArray} chargeArray={chargeArray} collectArray={collectArray}
                                       page={"스토어"}/>}/>
                <Route path="/priority"
                       element={<Priority title={"우선순위란?"} id={1} upperArray={upperArray} lowerArray={lowerArray}/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

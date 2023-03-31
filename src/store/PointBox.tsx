import React from 'react';
import styled from "styled-components";
import {coin} from "../yeonpick/Coin";

const PointBox = () => {
    return (
        <PointMainBox>
            <UserPoint>{"김연픽"} 님의 보유 포인트</UserPoint>
            <UserPointBox>
                <UserPointImg src={coin}/>
                <UserPointValue>3000</UserPointValue>
            </UserPointBox>
        </PointMainBox>
    );
};

const PointMainBox = styled.div`
  position: relative;
  width: 264px;
  height: 24px;
  left: calc(50% - 360px/2 + 48px);
`;

const UserPoint = styled.p`
  position: absolute;
  width: 150px;
  height: 24px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

const UserPointBox = styled.div`
  position: absolute;
  width: 64px;
  height: 24px;
  //left: 248px;
  right: calc(50% - 360px/2 + 48px);
`;

const UserPointImg = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
`;

const UserPointValue = styled.p`
  position: absolute;
  width: 39px;
  height: 24px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  left: 25px;
`;

export default PointBox;

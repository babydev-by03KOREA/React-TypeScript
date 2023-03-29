import React from 'react';
import styled from "styled-components";
import {charge, coin} from "../yeonpick/Coin";

type Props = {
  price: string,
  realPrice: string,
};

const PointCharge = ({ price, realPrice } : Props) => {
    return (
        <ChargeButtonMain>
            <ChargeImage src={charge} />
            <PointBox>
                <CoinImage src={coin}/>
                <CoinPrice>{price}</CoinPrice>
            </PointBox>
        </ChargeButtonMain>
    );
};

const ChargeButtonMain = styled.button`
  position: relative;
  width: 120px;
  height: 140px;
  background: #FFFFFF;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  margin-bottom: 24px;
`;

const ChargeImage = styled.img`
  position: absolute;
  width: 48px;
  height: 48px;
  top: 12px;
  left: 36px;
`;

const PointBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 4px;
  position: absolute;
  width: 65px;
  height: 24px;
  left: 27px;
  top: 72px;
`;

const CoinImage = styled.img`
  width: 16px;
  height: 16px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const CoinPrice = styled.div`
  width: 55px;
  height: 24px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export default PointCharge;

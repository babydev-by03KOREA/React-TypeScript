import React from "react";
import styled from "styled-components";
import {charge, coin} from "../yeonpick/Coin";

type Props = {
    price: string,
    realPrice: string,
};

const PointCharge = ({price, realPrice}: Props) => {
    return (
        <ChargeButtonMain>
            <ChargeImage src={charge}/>
            <PointBox>
                <CoinImage src={coin}/>
                <CoinPrice>{price}</CoinPrice>
            </PointBox>
            <PayBox>
                <PayPrice>{realPrice}</PayPrice>
            </PayBox>
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
  height: 24px;
  position: absolute;
  left: 24px;
  top: 72px;
  display: flex;
  align-items: center;
`;

const CoinImage = styled.img`
  width: 16px;
  height: 16px;
`;

const CoinPrice = styled.p`
  width: 55px;
  height: 24px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

const PayBox = styled.div`
  position: absolute;
  width: 72px;
  height: 24px;
  left: 24px;
  top: 104px;
  background: rgba(0, 0, 0, 0.04);
  border-radius: 8px;
`;

const PayPrice = styled.p`
  position: absolute;
  width: 51px;
  height: 18px;
  left: 10px;
  top: 3px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  justify-content: center;
  color: #000000;
`;

export default PointCharge;

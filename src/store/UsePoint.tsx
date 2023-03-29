import React from "react";
import styled from "styled-components";
import {coin} from "../yeonpick/Coin";

type Props = {
    price: number,
    title: string,
    description: string,
    img: string | undefined,
};

const UsePoint = ({price, title, description, img}: Props) => {
    return (
        <UsePointMain>
            <InnerBox>
                <ImageBox src={img}/>
            </InnerBox>
            <TextBox>
                <TitleBox>{title}</TitleBox>
                <DescriptionBox>{description}</DescriptionBox>
            </TextBox>
            <PointValueBox>
                <PointValue>
                    <PointValueImg src={coin}/>
                    <PointValuePrice>{price}</PointValuePrice>
                </PointValue>
            </PointValueBox>
        </UsePointMain>
    );
};

const UsePointMain = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: 24px;
  width: 120px;
  height: 168px;
  background: #FFFFFF;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;

const InnerBox = styled.div`
  position: absolute;
  width: 99px;
  height: 138px;
  left: 10px;
  top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 13px;
`;

const ImageBox = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
`;

const TextBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 4px;
  width: 99px;
  height: 48px;
  top: 69px;
  left: 11.5px;
`;

const TitleBox = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  text-align: center;
`;

const DescriptionBox = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 9px;
  line-height: 12px;
  text-align: center;
  color: #000000;
`;

const PointValueBox = styled.div`
  position: relative;
  top: 130px;
  left: 27.5px;
  width: 64px;
  height: 24px;
  background: rgba(0, 0, 0, 0.04);
  border-radius: 8px;
`;

const PointValue = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: 47px;
  height: 18px;
  left: 8px;
  top: 3px;
`;

const PointValueImg = styled.img`
  width: 12px;
  height: 12px;
`;

const PointValuePrice = styled.p`
  position: absolute;
  width: 31px;
  height: 18px;
  left: 14px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
`;

export default UsePoint;



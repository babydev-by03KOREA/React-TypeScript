import React from "react";
import styled from "styled-components";
import {ChevronRightIcon} from "@chakra-ui/icons";

type Props = {
    title: string,
    img: string,
    price: string
};

const CollectPoint = ({title, img, price}: Props) => {
    return (
        <CollectMainBox>
            <OptionTitle>{title}</OptionTitle>
            <OptionPayBox>
                <PayCoinImage src={img}/>
                <PayCoinValue>{price}</PayCoinValue>
                <ChevronRightIcon boxSize={4}/>
            </OptionPayBox>
        </CollectMainBox>
    );
};

const CollectMainBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 70px;
  width: 265px;
  height: 20px;
  left: calc(50% - 265px/2);
`;

const OptionTitle = styled.p`
  width: 100%;
  height: 20px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
`;

const OptionPayBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0;
  gap: 4px;
  width: 105px;
  height: 20px;
`;

const PayCoinImage = styled.img`
  width: 16px;
  height: 16px;
`;

const PayCoinValue = styled.p`
  //width: 26px;
  height: 20px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
`;
// 화살표 > 는 차크라 UI

export default CollectPoint;

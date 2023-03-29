import React from "react";
import styled from "styled-components";
import {ChevronLeftIcon} from "@chakra-ui/icons";

type Props = {
    text: string
}

const BackBar = ({text}: Props) => {
    return (
        <BackMainBox>
            <ChevronLeftIcon boxSize={6}/>
            <BackSpan>{text}</BackSpan>
        </BackMainBox>
    );
};

const BackMainBox = styled.div`
  position: relative;
  width: 104px;
  height: 28px;
  //left: calc(50% - 104px / 2 - 80px);
  left: calc(50% - 360px/2 + 48px);
  top: 48px;
`;

const BackSpan = styled.p`
  position: absolute;
  width: 47px;
  height: 28px;
  left: 37px;
  top: 0;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #000000;
`;

export default BackBar;

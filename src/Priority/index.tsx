import React from "react";
import BackBar from "../store/BackBar";
import styled from "styled-components";
import PriorityGraph from "./PriorityGraph";
import Margin from "../margin";
import PriorityCase from "./PriorityCase";
import UpperCase from "./UpperCase";

type LowerArray = {
    id: number,
    title: string,
};

type UpperArray = {
    id: number,
    title: string,
};

type Props = {
    lowerArray: LowerArray[],
    upperArray: UpperArray[],
    title: string,
};

const Priority = ({title, lowerArray, upperArray}: Props) => {
    return (
        <React.Fragment>
            <BackBar text={title}/>
            <PriorityBox>
                <PriorityGraph/>
            </PriorityBox>
            <Margin type={"marginFourEightDiv"}/>
            <TitleBox>우선순위가 낮아져요</TitleBox>
            <PriorityLowerUpperBox>
                {
                    lowerArray.map((elem, index) => (
                        <PriorityCase key={index} title={elem.title} />
                    ))
                }
            </PriorityLowerUpperBox>
            <Margin type={"marginFourEightDiv"}/>
            <TitleBox>우선순위가 높아져요</TitleBox>
            <PriorityLowerUpperBox>
                {
                    upperArray.map((elem, index) => (
                        <PriorityCase key={index} title={elem.title}/>
                    ))
                }
            </PriorityLowerUpperBox>
            <Margin type={"marginBottomPage"}/>
        </React.Fragment>
    );
};

const PriorityBox = styled.div`
  position: relative;
  width: 274px;
  height: 108px;
  margin-left: calc(50% - 360px / 2 + 48px);
  margin-top: 40px;
`;

const TitleBox = styled.p`
  position: relative;
  width: 129px;
  height: 24px;
  left: calc(50% - 360px / 2 + 48px);
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

const PriorityLowerUpperBox = styled.div`
  position: relative;
  width: 270px;
  //height: 254px; > FlexBox 동적처리
  display: flex;
  flex-direction: column;
  margin: 24px auto auto;
`;

export default Priority;

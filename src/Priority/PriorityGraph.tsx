import React from "react";
import styled from "styled-components";

const PriorityGraph = () => {
    return (
        <PriorityGraphBox>
            <PriorityDescription>
                우선순위는 이상형 매칭 황률에 큰 영향을 줘요!<br/>
                아래 기준 및 내부 운영 규정에 따라 오를 수도, 내릴 수도 있어요.
            </PriorityDescription>
            <PriorityGraphMainBox>
                <PriorityGraphOne/>
                <PriorityGraphTwo/>
                <PriorityGraphThree/>
                <PriorityGraphFour/>
                <PriorityGraphFive/>
            </PriorityGraphMainBox>
        </PriorityGraphBox>
    );
};

const PriorityGraphBox = styled.div`
  position: relative;
`;

const PriorityDescription = styled.p`
  position: relative;
  width: 273px;
  height: 36px;
  left: 1px;
  top: 0;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 18px;
  text-align: center;
  color: #000000;
`;

const PriorityGraphMainBox = styled.div`
  position: absolute;
  width: 270px;
  height: 12px;
  left: 0;
  top: 68px;
  display: flex;
  flex-direction: row;
`;

const PriorityGraphOne = styled.div`
  width: 52px;
  height: 12px;
  background: #F5EEFF;
  border-radius: 16px 0 0 16px;
  margin-right: 2px;
`;

const PriorityGraphTwo = styled.div`
  width: 52px;
  height: 12px;
  margin-right: 2px;
  background: #E8DBFC;
`;

const PriorityGraphThree = styled.div`
  width: 52px;
  height: 12px;
  margin-right: 2px;
  background: #C19FF3;
`;

const PriorityGraphFour = styled.div`
  width: 52px;
  height: 12px;
  margin-right: 2px;
  background: #C19FF3;
`;

const PriorityGraphFive = styled.div`
  width: 54px;
  height: 12px;
  background: #9754FB;
  border-radius: 16px 0 0 16px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;

export default PriorityGraph;

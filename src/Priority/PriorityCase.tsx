import React from "react";
import styled from "styled-components";

type Props = {
    title: string,
};

const PriorityCase = ({title}: Props) => {
    return (
        <MainLowerBox>
            <LowerTitleBox>{title}</LowerTitleBox>
        </MainLowerBox>
    );
};

const MainLowerBox = styled.div`
  position: relative;
  width: 270px;
  height: 38px;
  background: rgba(0, 0, 0, 0.04);
  border-radius: 12px;
  margin-bottom: 16px;
`;

const LowerTitleBox = styled.p`
  position: absolute;
  height: 20px;
  left: 14px;
  top: 9px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #000000;
`;

export default PriorityCase;

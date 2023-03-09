import React from "react";
import styled from "styled-components";

function Join() {
    return (
        <React.Fragment>
            <JoinWelcome>회원가입</JoinWelcome>
            <InputBox>
                <SubTitle>ID를 입력하세요.</SubTitle>
                <InputForm/>
            </InputBox>
            <InputBox>
                <SubTitle>PWD를 입력하세요.</SubTitle>
                <InputForm/>
            </InputBox>
        </React.Fragment>
    );
}

const JoinWelcome = styled.span`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  font-size: 30px;
  font-family: 'Pretendard';
`;

const SubTitle = styled.span`
  position: absolute;
  display: block;
  padding-left: 58px;
  top: -25px;
  font-family: 'Pretendard';
  font-size: 15px;
`;

const InputBox = styled.div`
  position: relative;
  text-align: center;
  top: 100px;
  padding-bottom: 40px;
`;

const InputForm = styled.input`
  border-radius: 3px;
  border: 1px solid #CBD5E0;
`;

export default Join;

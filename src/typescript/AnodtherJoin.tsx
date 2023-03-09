import React, {useState} from "react";
import styled from "styled-components";

const AnodtherJoin = () => {

    const [inputs, setInputs] = useState({
        id: '',
        pwd: '',
    });

    const {id, pwd} = inputs;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    return (
        <React.Fragment>
            <JoinWelcome>회원가입</JoinWelcome>
            <InputBox>
                <SubTitle>ID를 입력하세요.</SubTitle>
                <InputForm onChange={onChange} value={id} name="id" />
            </InputBox>
            <InputBox>
                <SubTitle>PWD를 입력하세요.</SubTitle>
                <InputForm type={"password"} onChange={onChange} value={pwd} name="pwd" />
            </InputBox>
            <InputBox>
                <SubTitle>입력한 ID</SubTitle>
                <InputValue>{id}</InputValue>
            </InputBox>
            <InputBox>
                <SubTitle>입력한 PWD</SubTitle>
                <InputValue>{pwd}</InputValue>
            </InputBox>
        </React.Fragment>
    );
};

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

const InputValue = styled.p``;

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

export default AnodtherJoin;

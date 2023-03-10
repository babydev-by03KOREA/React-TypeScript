import React, {useState} from "react";
import styled from "styled-components";

const ResetRef = () => {
    /* [useRef] > 외부 라이브러리, 직접 DOM 선택 필요 시 `ref` 사용 */
    const [inputs, setInputs] = useState({
        id: "",
        pwd: ""
    });
    const nameInput = React.useRef<HTMLInputElement>(null);

    const {id, pwd} = inputs;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        /** [REACT DEFAULT .TS DOM]
         * input tag 값 가져오기
         * value = input value / name = "id" 혹은 name = "pwd"
         * */
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const onReset = () => {
        setInputs({
            id: "",
            pwd: ""
        });
        if (nameInput.current) {
            nameInput.current.focus();
        }
    };

    return (
        <React.Fragment>
            <JoinWelcome>회원가입</JoinWelcome>
            <PrintBox>
                <InputBox>
                    <SubTitle>ID를 입력하세요.</SubTitle>
                    <InputForm onChange={onChange} value={id} name="id"/>
                </InputBox>
                <InputBox>
                    <SubTitle>PWD를 입력하세요.</SubTitle>
                    <InputForm onChange={onChange} type={"password"} value={pwd} name="pwd"/>
                </InputBox>
            </PrintBox>
            <PrintBox>
                <InputBox>
                    <SubTitle>입력한 ID</SubTitle>
                    <InputValue>{id}</InputValue>
                </InputBox>
                <InputBox>
                    <SubTitle>입력한 PWD</SubTitle>
                    <InputValue>{pwd}</InputValue>
                </InputBox>
            </PrintBox>
            <ResetBox onClick={onReset}>회원가입하기</ResetBox>
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
  //display: block;
  //padding-left: 58px;
  //top: -25px;
  font-family: 'Pretendard';
  font-size: 15px;
  padding: 3px;
`;

const InputValue = styled.p``;

const ResetBox = styled.div`
  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 25px;
  width: 200px;
  height: 70px;
  background-color: mediumpurple;
  margin: 100px;
  line-height: 70px;
  text-align: center;
`;

const PrintBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 200px;
  margin-top: 20px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  padding-left: 60px;
  padding-top: 20px;
`;

const InputForm = styled.input`
  width: 300px;
  border-radius: 3px;
  border: 1px solid #CBD5E0;
`;

export default ResetRef;

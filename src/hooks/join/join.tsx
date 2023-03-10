import React, {useState} from "react";
import styled from "styled-components";

const Join = () => {

    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");

    const onChangeID = (e: React.ChangeEvent<HTMLInputElement>) => {
        /* nullable 가능성 존재 */
        setId(e.target.value);
    };

    const onChangePWD = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPwd(e.target.value);
    };

    return (
        <React.Fragment>
            <JoinWelcome>회원가입</JoinWelcome>
            <InputBox>
                <SubTitle>ID를 입력하세요.</SubTitle>
                {/* value={id} > 있어도 되고 없어도 작동한다! */}
                <InputForm onChange={onChangeID} />
            </InputBox>
            <InputBox>
                <SubTitle>PWD를 입력하세요.</SubTitle>
                {/* value={pwd} > 있어도 되고 없어도 작동한다! */}
                <InputForm  onChange={onChangePWD} type={"password"} />
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

export default Join;

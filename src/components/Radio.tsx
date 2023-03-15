import React from "react";
import styled from "styled-components";

type labelArr = {
    id: string
    text: string
}

type Props = {
    labelArr: labelArr[]
    checked: string
    onChange: (value: string) => void
    type?: string
}

const RadioButton = ({labelArr, checked, onChange}: Props) => {
    const handleChange = (id: string) => {
        onChange(id);
    };

    return (
        <React.Fragment>
            <Box>
                <Bar/>
                {labelArr.map((elem, index) => (
                    <InputBox key={index}>
                        <RadioInput
                            name={elem.id}
                            active={elem.id === checked}
                            onClick={() => handleChange(elem.id)}
                        />
                    </InputBox>
                ))}
            </Box>
            <TextBox>
                {
                    labelArr.map((item) => (
                        <div key={item.id}>
                            <TextP>{item.text}</TextP>
                        </div>
                    ))
                }
            </TextBox>
        </React.Fragment>
    );
};

const Box = styled.div`
  position: relative;
  width: 100%;
  height: 36px;
  padding-left: calc(50% - 360px / 2 + 43px);
  padding-right: calc(50% - 360px / 2 + 43px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Bar = styled.div`
  position: absolute;
  width: 260px;
  height: 8px;
  margin-top: 14px;
  border-radius: 36px;
  background-color: #edf2f7;
  z-index: 0;
`;

const TextBox = styled.div`
  width: 100%;
  position: relative;
  top: 16px;
  display: flex;
  flex-direction: row;
  margin: auto;
  justify-content: space-evenly;
  /*문득 생각난건데 Bar 기준으로 justify Content 짜면 딱 맞을거 같지 않음?*/
`;

const TextP = styled.p`
  font-family: 'Pretendard';
  font-size: 14px;
`;

const InputBox = styled.div`
  z-index: 0;
`;

const RadioInput = styled.button<{ active: boolean }>`
  /* 기본 스타일 */
  width: 32px;
  height: 32px;
  background: #ffffff;
  border: ${(props) =>
          props.active ? "10px solid #9754FB" : "2px solid #E2E8F0"};
  box-shadow: ${(props) =>
          props.active ? "2px 2px 10px 1px rgba(151, 84, 251, 0.2)" : ""};
  border-radius: 9999px;
  z-index: 1;
`;

export default RadioButton;

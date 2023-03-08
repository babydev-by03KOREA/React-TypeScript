import styled from "styled-components";

import React, {useState} from "react";
import {Checkbox} from "@chakra-ui/react";

/*type CardProps = {
    title: string;
};*/

const arr = [
    {data: 0, text: "대학생"},
    {data: 1, text: "대학원생"},
    {data: 2, text: "취준생"},
    {data: 3, text: "직장인"},
];

// const Card = ({title}: CardProps) => {
const Card = () => {
    /**
    * [getter, setter]
    * @type job: number[] 타입 상태, setJob: 상태 변경 함수
    */
    const [job, setJob] = useState<number[]>([]);

    const onClick = (data: number) => {
        /* onClick 이라는 함수를 정의하고 data number 타입 인자를 받습니다. */
        if (job.includes(data)) {
            /** @if (onClick 함수 내에서 job 배열에 data가 포함되어 있으면) job 배열에서 data를 제거하고 setJob 함수로 상태를 업데이트합니다. */
            setJob(job.filter(item => item !== data));
        } else {
            /** @else (job 배열에 data가 포함되어 있지 않으면) job 배열에 data를 추가하고 setJob 함수로 상태를 업데이트 합니다. */
            setJob([...job, data]);
        }
    };

    return (
        <>
            {
                arr.map((elem, index) => (
                    <CheckBoxComponents key={index}
                                        className={job.includes(elem.data) ? "btn-edge-on" : "btn-edge-off"}>
                        <TextSpan>{elem.text}</TextSpan>
                        <Checkbox colorScheme="chakraPrimary" pos="absolute" top="16px" left="168px"
                                  onChange={() => onClick(elem.data)}></Checkbox>
                    </CheckBoxComponents>
                ))
            }
        </>

    );
};

const TextSpan = styled.span`
  position: absolute;
  width: 60px;
  height: 24px;
  left: 32px;
  right: 142px;
  top: 12px;
  //font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;


const CheckBoxComponents = styled.div`
  box-sizing: border-box;
  width: 216px;
  height: 48px;
  margin-bottom: 32px;
  border-radius: 12px;
  flex: none;
  order: 0;
  flex-grow: 0;
  position: relative;
`;

export default Card;

import styled from 'styled-components'

import React, { useState } from 'react'
import { Checkbox } from '@chakra-ui/react'

/*type CardProps = {
    title: string;
};*/

type elementType = {
  data: number
  text: string
}

type Props = {
  item: number[]
  setItem: (value: number[]) => void
  arr: elementType[]
}

const State = ({ item, setItem, arr }: Props) => {
  /**
   * [0, f]
   * @type job: number[] 타입 상태, setJob: 상태 변경 함수
   */
  const onClick = (data: number) => {
    /* onClick 이라는 함수를 정의하고 data number 타입 인자를 받습니다. */
    if (item.includes(data)) {
      /** @if (onClick 함수 내에서 job 배열에 data가 포함되어 있으면) job 배열에서 data를 제거하고 setJob 함수로 상태를 업데이트합니다. */
      /** @on
       * setJob 함수를 호출하면 job `배열`값이 바뀝니다. / (item 매개변수값이 data 와 다른지 비교하여 boolean return)
       * data === job 요소를 배열에서 제거 후 setJob에 전달하면 job 상태가 업데이트되고 컴포넌트가 reRendering
       * filter: true 반환 요소만 필터링하여 새로운 배열로 반환
       */
      setItem(item.filter((item) => item !== data))
    } else {
      /** @off */
      /** @else (job 배열에 data가 포함되어 있지 않으면) job 배열에 data를 추가하고 setJob 함수로 상태를 업데이트 합니다. */
      setItem([...item, data])
    }
  }

  return (
    <React.Fragment>
      {
        /** map 메서드로 순회하면서 각 요소마다 컴포넌트 생성중. key=React arrays Index, className=job 배열에 elem.data 포함여부에 따라 스타일 새로지정
         *  elem=배열의 각 요소를 나타내는 매개변수*/
        arr.map((elem, index) => (
          <CheckBoxComponents
            key={index}
            className={
              item.includes(elem.data) ? 'btn-edge-on' : 'btn-edge-off'
            }
            onClick={() => onClick(elem.data)}
          >
            <TextSpan>{elem.text}</TextSpan>
            <Checkbox
              colorScheme='chakraPrimary'
              pos='absolute'
              top='16px'
              left='168px'
              isChecked={item.includes(elem.data)}
              onChange={() => onClick(elem.data)}
            ></Checkbox>
          </CheckBoxComponents>
        ))
      }
    </React.Fragment>
  )
}

const TextSpan = styled.span`
  position: absolute;
  width: 60px;
  height: 24px;
  left: 32px;
  right: 142px;
  top: 12px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`

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
`

export default State

import React from 'react'
import styled from 'styled-components'

type textArr = {
  data: number
  text: string
}

type selectBox = {
  textArr: textArr[]
  item: number
  setItem: (value: number) => void
}

const SelectBox = ({ textArr, item, setItem }: selectBox) => {
  /* 어떤걸 눌렀는가? (눌렀던 버튼의 num) */
  const clickAction = (num: number) => {
    /* [눌렀던 버튼이 저장]되는 배열에 지금 클릭한 값이 있는가? */
    if (item !== num) {
      /* 값셋팅([눌렀던 버튼이 저장].true 반환 요소 필터링(눌린값에 값이 있는가?)) */
      /* 있으면 빼세요 */
      setItem(num)
    }
  }

  return (
    <React.Fragment>
      {textArr.map((elem, index) => (
        <SelectBoxComponents
          key={index}
          className={item === elem.data ? 'btn-edge-on' : 'btn-edge-off'}
          onClick={() => clickAction(index)}
        >
          <TextSpan>{elem.text}</TextSpan>
        </SelectBoxComponents>
      ))}
    </React.Fragment>
  )
}

const SelectBoxComponents = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 216px;
  height: 48px;
  //border: 1px solid #9754FB;
  border: 1px solid #cbd5e0;
  //box-shadow: 2px 2px 10px 1px rgba(151, 84, 251, 0.2);
  border-radius: 12px;
  margin-bottom: 32px;
`

const TextSpan = styled.span`
  position: absolute;
  width: 28px;
  height: 24px;
  left: 93px;
  top: 12px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`

export default SelectBox

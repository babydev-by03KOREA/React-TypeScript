import React, { useState } from 'react'
import styled from 'styled-components'

const AnodtherJoin = () => {
  const [inputs, setInputs] = useState({
    id: '',
    pwd: '',
  })

  const { id, pwd } = inputs
  /** @React [React.ChangeEvent] > React 특정 종류의 이벤트(값변경)에 대한 타입 정의
   *  @Vanilla [EventListener] > DOM 에서 다양한 종류의 이벤트에 대한 함수를 등록 가능한 메소드 */
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    /* e.target == id input 요소를 가리킴 */
    console.log('target', e.target)
    /** @value 이벤트 리스너의 target 으로 name, value 추출
     *  @value 는 입력된 값, @name 은 "id"
     *  value, name 모두 정의되어져 있는 값임 */
    const { value, name } = e.target
    setInputs({
      /* inputs 상태의 id key 에 value 할당 */
      ...inputs,
      /* [name] == [id] */
      [name]: value,
    })
  }

  return (
    <React.Fragment>
      <JoinWelcome>회원가입</JoinWelcome>
      <InputBox>
        <SubTitle>ID를 입력하세요.</SubTitle>
        <InputForm onChange={onChange} value={id} name='id' />
      </InputBox>
      <InputBox>
        <SubTitle>PWD를 입력하세요.</SubTitle>
        <InputForm
          type={'password'}
          onChange={onChange}
          value={pwd}
          name='pwd'
        />
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
  )
}

const JoinWelcome = styled.span`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  font-size: 30px;
  font-family: 'Pretendard';
`

const SubTitle = styled.span`
  position: absolute;
  display: block;
  padding-left: 58px;
  top: -25px;
  font-family: 'Pretendard';
  font-size: 15px;
`

const InputValue = styled.p``

const InputBox = styled.div`
  position: relative;
  text-align: center;
  top: 100px;
  padding-bottom: 40px;
`

const InputForm = styled.input`
  border-radius: 3px;
  border: 1px solid #cbd5e0;
`

export default AnodtherJoin

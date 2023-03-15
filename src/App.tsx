import React, { useRef, useState } from 'react'
// import Card from "./typescript/components";
import styled from 'styled-components'
import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from '@emotion/react'
import { extendedTheme, theme } from './style'
import Join from './hooks/join/join'
import UserList from './hooks/arrays/UserList'
import CreateUser from './hooks/useRef/CreateUser'
import RadioButton from './components/Radio'
import ShopList from "./components/ShopList";

const checkArray = [
  { data: 0, text: '대학생' },
  { data: 1, text: '대학원생' },
  { data: 2, text: '취준생' },
  { data: 3, text: '직장인' },
]

const selectArray = [
  { data: 0, text: '유쌍' },
  { data: 1, text: '무쌍' },
]

const wantDating = [
  { id: '1번', text: '1번' },
  { id: '2번', text: '2번' },
  { id: '3번', text: '3번' },
  { id: '4번 이상', text: '4번 이상' },
]

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  })

  const { username, email } = inputs

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
    },
  ])

  const [job, setJob] = useState<number[]>([])
  const [select, setSelected] = useState<number>(-1)
  const nextId = useRef(4)
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    }
    setUsers(users.concat(user))

    setInputs({
      username: '',
      email: '',
    })
    nextId.current += 1
  }

  const [check, setCheck] = useState<string>(wantDating[0].id)

  return (
    <Container>
      <MobileContainer>
        <ThemeProvider theme={theme}>
          <ChakraProvider theme={extendedTheme}>
            <RadioButton
              labelArr={wantDating}
              checked={check}
              onChange={setCheck}
            />
          </ChakraProvider>
        </ThemeProvider>
      </MobileContainer>
    </Container>
  )
}

const Container = styled.div`
  background-color: rgba(200, 200, 200, 0.2);
  width: 100vw;
  // height: calc(var(--vh, 1vh) * 100);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Pretendard;
`

const MobileContainer = styled.div`
  width: 420px;
  min-height: 100vh;
  background-color: white;
  position: relative;
  overflow-x: hidden;
  @media screen and (max-width: 420px) {
    width: 100vw;
  }
`

export default App

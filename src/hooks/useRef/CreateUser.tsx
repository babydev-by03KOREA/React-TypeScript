import React from 'react'

interface create {
  username: string
  email: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onCreate: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const CreateUser = ({ username, email, onChange, onCreate }: create) => {
  return (
    <div>
      <input
        type='text'
        name='username'
        placeholder='계정명'
        value={username}
        onChange={onChange}
      />
      <input
        type='text'
        name='email'
        placeholder='이메일'
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  )
}

export default CreateUser

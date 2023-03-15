import React from 'react'

type User = {
  id: number
  username: string
  email: string
}

const User = ({ user }: { user: User }) => {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  )
}

const UserList = ({ users }: { users: User[] }) => {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  )
}

export default UserList

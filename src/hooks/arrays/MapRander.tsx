import React from 'react'

const Key = () => {
  const array = [1, 2, 3, 4, 5]
  return (
    <div>
      {
        // eslint-disable-next-line react/jsx-key
        array.map((item) => (
          <div>{item * 2}</div>
        ))
      }
    </div>
  )
}

export default Key

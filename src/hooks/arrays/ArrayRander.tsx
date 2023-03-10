import React from 'react';

interface User {
    username: string,
    email: string
}

const User = ({ user }: {user:User}) => {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
};

const ArrayRander = () => {
    const users = [
        {
            id: 1,
            username: 'hyeongju',
            email: 'hyeongju1122@gmail.com'
        },
        {
            id: 2,
            username: 'kiseok',
            email: 'kiseok.suh.new@gmail.com'
        },
        {
            id: 3,
            username: 'yeonpick',
            email: 'yeonpick@gmail.com'
        }
    ];
    return (
        <div>
            {users.map((user, index) => (
                /** @property key value > 각 원소들마다 가지고 있는 고유값으로 설정해야 함. `user.id` OK, `index` OK */
                <User user={user} key={index}/>
            ))}
        </div>
    );
}

export default ArrayRander;

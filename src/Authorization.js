import React, { useState } from 'react';

const Authorization = ({ imgUrl }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const authorize = () => {
        if (login) {
            if (/(?=.*[0-9])(?=.*[A-Z]).{8,}/.test(password)) {
                fetch(`https://api.github.com/users/${login}`).then(response => response.json())
                    .then(data => 'avatar_url' in data ? imgUrl(data['avatar_url']) : alert('Пользователь не найден.'));
            }
            else {
                alert('Пароль должен быть длиной не менее 8 символов и содержать хотя бы 1 прописную латинскую букву и хотя бы 1 цифру.');
            }
        }
    }
    return (
        <div>
            <input type='text' placeholder='Логин' onChange={e => setLogin(e.target.value)} />
            <input type='password' placeholder='Пароль' onChange={e => setPassword(e.target.value)} />
            <button onClick={() => authorize()}>Войти</button>
        </div>
    );
}

export default Authorization;

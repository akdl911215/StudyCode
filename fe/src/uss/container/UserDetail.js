// import './src/uss/component/userDetail.css';
import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserDetail = () => {
    const [inputs, setInputs] = useState('');

    const { username, password } = inputs;

    const login = (e) => {
        e.preventDefault();
        console.log(setInputs);
        alert('do Login');

        axios
            .post(`http://localhost:8080/users/login`, {
                username,
                password,
            })
            .then((res) => {
                alert('로그인 되셨습니다');
                console.log(res);
                alert('res = ' + JSON.stringify(res));

                alert('res.data = ' + res.data);
            })
            .catch((err) => console.log(err));
    };
    const handleChange = useCallback(
        (e) => {
            const { value, name } = e.target;
            setInputs({
                ...inputs,
                [name]: value,
            });
        },
        [inputs]
    );

    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <h2>로그인</h2>

                <div className="imgcontainer">
                    <img src="img_avatar2.png" alt="Avatar" className="avatar" />
                </div>

                <div className="container">
                    <label htmlFor="username">
                        <b>ID</b>
                    </label>
                    <input type="text" placeholder="Enter Username" name="username" value={inputs.username || ''} onChange={handleChange} required />

                    <label htmlFor="password">
                        <b>Password</b>
                    </label>
                    <input type="password" placeholder="Enter Password" name="password" value={inputs.password || ''} onChange={handleChange} required />

                    <button type="submit" onClick={login}>
                        로그인
                    </button>

                    <div className="container" />
                    <Link to="/">
                        <button type="submit" className="cancelbtn">
                            취소
                        </button>
                    </Link>
                </div>
            </form>
        </>
    );
};

export default UserDetail;

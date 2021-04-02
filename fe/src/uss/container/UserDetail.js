// import './src/uss/component/userDetail.css';
import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserDetail = () => {
    const [inputs, setInputs] = useState({
        username: ' ',
        password: ' ',
    });

    const { username, password } = inputs;

    const handleChange = useCallback(
        (e) => {
            const { name, value } = e.target;
            setInputs({
                ...inputs,
                [name]: value,
            });
        },
        [inputs]
    );

    const fetchOne = () => {
        console.log(setInputs);
        alert('정보를 가져옵니다');

        axios({
            method: 'post',
            url: `http://localhost:8080/users/login/${localStorage.getItem('select')}`,
            data: {
                username,
                password,
            },
        })
            .then((res) => {
                console.log(res);
                alert('res = ' + res);
                setInputs(res.data);
                alert('res.data = ' + res.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchOne();
    }, []);

    const handleSubmit = useCallback(
        (e) => {
            alert('정보를 보냅니다');
            alert(`${localStorage.getItem('select')}`);

            e.preventDefault();
            console.log('Log in');
            axios
                .put(`http://localhost:8080/users/${localStorage.getItem('select')}`, {
                    username,
                    password,
                })
                .then((res) => {
                    console.log(res);
                    window.location = '/';
                })
                .catch((err) => console.log(err));
        },
        [username, password]
    );

    return (
        <>
            <form onSubmit={handleSubmit} method="get">
                <h2>로그인</h2>

                <div className="imgcontainer">
                    <img src="img_avatar2.png" alt="Avatar" className="avatar" />
                </div>

                <div className="container">
                    <label htmlFor="username">
                        <b>ID</b>
                    </label>
                    <input type="text" placeholder="Enter Username" name="username" value={username} onChange={handleChange} required />

                    <label htmlFor="password">
                        <b>Password</b>
                    </label>
                    <input type="password" placeholder="Enter Password" name="password" value={password} onChange={handleChange} required />

                    <button
                        type="submit"
                        onClick={() => {
                            localStorage.setItem('select', `${username}`);
                        }}
                    >
                        로그인
                    </button>

                    <div className="container" />
                    <Link to="/">
                        <button type="button" className="cancelbtn">
                            취소
                        </button>
                    </Link>
                </div>
            </form>
        </>
    );
};

export default UserDetail;

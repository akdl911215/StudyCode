// import './src/uss/component/userDetail.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserDetail = () => {
    const [detail, setDetail] = useState({});

    // const authenticated = detail != null;

    // const login = ({ username, password }) => setDetail(detailLogin({ username, password }));
    // const logout = () => setDetail(null);

    const detailLogin = (username, password) => {
        detail.find((detail) => detail.username === username && detail.password === password);
        if (detail === undefined) throw new Error();
        return detailLogin;
    };

    const fetchOne = (detailLogin) => {
        alert('로그인을 시도합니다.');

        axios({
            username: ' ',
            password: ' ',
        })
            .then((res) => {
                console.log(res);
                setDetail(res.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchOne();
    }, []);

    return (
        <>
            <form onSubmit={fetchOne} method="get">
                <h2>로그인</h2>

                <div className="imgcontainer">
                    <img src="img_avatar2.png" alt="Avatar" className="avatar" />
                </div>

                <div className="container">
                    <label htmlFor="uname">
                        <b>ID</b>
                    </label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label htmlFor="psw">
                        <b>Password</b>
                    </label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <button type="submit">로그인</button>

                    <div className="container" />
                    <button type="button" className="cancelbtn">
                        Cancel
                    </button>
                </div>
            </form>
        </>
    );
};

export default UserDetail;

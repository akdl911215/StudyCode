// import './src/uss/component/userDetail.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserDetail = () => {
    const [detail, setDetail] = useState({});

    const fetchOne = () => {
        axios({
            /*method: post*/
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
            <h2>로그인</h2>

            <form>
                <div className="imgcontainer">
                    <img src="img_avatar2.png" alt="Avatar" class="avatar" />
                </div>

                <div className="container">
                    <label htmlFor="uname">
                        <b>Username</b>
                    </label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label htmlFor="psw">
                        <b>Password</b>
                    </label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <button type="submit">Login</button>

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

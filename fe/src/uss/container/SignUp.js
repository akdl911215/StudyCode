import '../component/signupForm.css';
import React, { useCallback, useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [inputs, setInputs] = useState({
        userName: ' ',
        userPassword: ' ',
        userEmail: ' ',
        userAddress: ' ',
        userPhoneNumber: ' ',
    });

    const { userName, userPassword, userEmail, userAddress, userPhoneNumber } = inputs;

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

    const handleSubmit = useCallback(
        (e) => {
            alert('회원가입 버튼누름');

            e.preventDefault();
            console.log('작동');

            alert('ID : ' + userName);
            alert('비밀번호 : ' + userPassword);
            alert('email : ' + userEmail);
            alert('주소 : ' + userAddress);
            alert('핸드폰 번호 : ' + userPhoneNumber);

            axios
                .post('http://localhost:8080/users/insert', {
                    userName,
                    userPassword,
                    userEmail,
                    userAddress,
                    userPhoneNumber,
                })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => console.log(err));
        },
        [userName, userPassword, userEmail, userAddress, userPhoneNumber]
    );

    return (
        <form onSubmit={handleSubmit} method="get">
            <div className="container">
                <h1>회원가입</h1>

                <hr />

                <label htmlFor="userName">
                    <b>아이디</b>
                </label>
                <input type="text" onChange={handleChange} placeholder="UserName" name="userName" />

                <label htmlFor="userPassword">
                    <b>비밀번호</b>
                </label>
                <input type="password" onChange={handleChange} placeholder="UserPassword" name="userPassword" />

                <label htmlFor="userEmail">
                    <b>Email</b>
                </label>
                <input type="text" onChange={handleChange} placeholder="UserEmail" name="userEmail" />

                <label htmlFor="userAddress">
                    <b>주소</b>
                </label>
                <input type="text" onChange={handleChange} placeholder="UserAddress" name="userAddress" />

                <label htmlFor="userPhoneNumber">
                    <b>핸드폰 번호</b>
                </label>
                <input type="text" onChange={handleChange} placeholder="UserPhoneNumber" name="userPhoneNumber" />

                <div className="clearfix">
                    <button type="/button" className="cancelbtn">
                        Cancel
                    </button>
                    <button type="submit" className="signupbtn">
                        회원가입 버튼
                    </button>
                </div>
            </div>
        </form>
    );
};
export default SignUp;

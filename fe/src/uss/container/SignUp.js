import '../component/signupForm.css';
import React from 'react';
import axios from 'axios';

const SignUp = (props) => {
    const insertMany = (e) => {
        e.preventDefault();
        alert(`클릭 1`);
        axios
            .get(`http://localhost:8080/auth/insertMany`)
            .then((res) => {
                alert(`클릭 2: ${JSON.stringify(res.data)}`);
            })
            .catch((err) => {
                alert(`클릭 3: ${err}`);
            });
    };
    const rrr = () => {
        axios.get(`http://localhost:8080/feeds/${(props.match.params.id = 1)}`).then((res) => {
            console.log(res.data);
        });
    };

    return (
        <form>
            <div className="container">
                <h1>Sign Up</h1> <button onClick={insertMany}>더미 데이터 입력</button>
                <p>Please fill in this form to create an account.</p>
                <hr />
                <label htmlFor="email">
                    <b>Email</b>
                </label>
                <input type="text" placeholder="Enter Email" name="email" />
                <label htmlFor="psw">
                    <b>Password</b>
                </label>
                <input type="password" placeholder="Enter Password" name="psw" />
                <label htmlFor="psw-repeat">
                    <b>Repeat Password</b>
                </label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" />
                <label>
                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                </label>
                <p>
                    By creating an account you agree to our <a href="#">Terms Privacy</a>.
                </p>
                <div className="clearfix">
                    <button type="/button" className="cancelbtn">
                        Cancel
                    </button>
                    <button type="/submit" className="signupbtn" onClick={insertMany}>
                        Sign Up
                    </button>
                    <button onClick={rrr}>Sign dsadsad</button>
                </div>
            </div>
        </form>
    );
};
export default SignUp;

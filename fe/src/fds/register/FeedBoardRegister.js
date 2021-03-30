import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

const FeedBoardRegister = () => {
    const [inputs, setInputs] = useState({
        title: ' ',
        writer: ' ',
        content: ' ',
        addLocation: ' ',
        hashTag: ' ',
    });

    const handleList = useCallback(() => {
        axios
            .get(`http://localhost:3000/FeedBoardList`)
            .then((res) => {
                alert('성공');
                console.log(res);
            })
            .catch((err) => console.log(err));
    });

    const { title, writer, content, addLocation, hashTag } = inputs;

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
            e.preventDefault();
            console.log('작동');

            alert('test Insert');

            axios
                .post('http://localhost:8080/feeds/insert', {
                    title,
                    writer,
                    content,
                    addLocation,
                    hashTag,
                })
                .then((res) => {
                    console.log(res);
                    window.location = '/FeedBoardList';
                })
                .catch((err) => console.log(err));
        },
        [title, writer, content, addLocation, hashTag]
    );

    return (
        <>
            <form onSubmit={handleSubmit} method="post">
                <div className="ragisterForm">
                    <h1>등록</h1>
                    <hr />

                    <label htmlFor="title">
                        <b>제목</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter Title" name="title" id="title" required />

                    <label htmlFor="writer">
                        <b>작성자</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter Writer" name="writer" id="writer" required />

                    <label htmlFor="content">
                        <b>본문 내용</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter Content" name="content" id="content" required />

                    <label htmlFor="addLocation">
                        <b>작성한 지역</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter AddLocation" name="addLocation" id="addLocation" required />

                    <label htmlFor="hashTage">
                        <b>해쉬 태그</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter HashTage" name="hashTage" id="hashTage" required />

                    <hr />

                    <button type="submit">등록하기</button>

                    <button>
                        <a href="/FeedBoardList">목록으로</a>
                    </button>
                </div>
            </form>
        </>
    );
};
export default FeedBoardRegister;

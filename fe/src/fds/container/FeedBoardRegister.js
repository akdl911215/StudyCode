import React, { useCallback, useState } from 'react';
import axios from 'axios';

const FeedBoardRegister = () => {
    const [inputs, setInputs] = useState({
        title: ' ',
        writer: ' ',
        content: ' ',
        addLocation: ' ',
        hashTag: ' ',
        regdate: ' ',
    });

    const { title, writer, content, addLocation, hashTag, regDate } = inputs;

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
            alert('제목 : ' + title);
            alert('작성자 : ' + writer);
            alert('본문내용 : ' + content);
            alert('작성위치 : ' + addLocation);
            alert('해쉬태그 : ' + hashTag);
            alert('등록일자 : ' + regDate);
            axios
                .post('http://localhost:8080/feeds/insert', {
                    title,
                    writer,
                    content,
                    addLocation,
                    hashTag,
                    regDate,
                })
                .then((res) => {
                    console.log(res);
                    window.location = '/FeedBoardList';
                })
                .catch((err) => console.log(err));
        },
        [title, writer, content, addLocation, hashTag, regDate]
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

                    <label htmlFor="hashTag">
                        <b>해쉬 태그</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter HashTag" name="hashTag" id="hashTag" required />

                    <label htmlFor="regDate">
                        <b>등록 일자</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter RegDate" name="regDate" id="regDate" required />

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

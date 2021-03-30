import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FeedBoardUpdate = () => {
    const [detail, setDetail] = useState({});

    const { title, writer, content, addLocation, hashTag } = detail;
    const fetchOne = () => {
        axios
            .get(`http://localhost:3000/FeedBoardRead/${localStorage.getItem('select')}`)
            .then((res) => {
                console.log(res);
                setDetail({
                    feedNo: res.data.feedNo,
                    title: res.data.title,
                    content: res.data.content,
                    addLocation: res.data.addLocation,
                    hashTag: res.data.hashTag,
                    regDate: res.data.regDate,
                });
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchOne();
    }, []);

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            console.log('update');
            axios
                .put(`http://localhost:3000/FeedBoardRead/${localStorage.getItem('select')}`, {
                    title,
                    writer,
                    content,
                    addLocation,
                    hashTag,
                })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => console.log(err));
        },
        [title, writer, content, addLocation, hashTag]
    );

    const handleChange = useCallback(
        (e) => {
            const { value, name } = e.target;
            setDetail({
                ...detail,
                [name]: value,
            });
        },
        [detail]
    );
    return (
        <>
            <h1>수정 페이지</h1>
            <form onSubmit={handleSubmit} method="post">
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
                <button type="submit">수정하기</button>
            </form>
            <Link to="/FeedBoardList">목록으로</Link>
        </>
    );
};
export default FeedBoardUpdate;

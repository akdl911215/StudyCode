import axios from 'axios';
import { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FeedBoardRead = () => {
    const [detail, setDetail] = useState({});

    const fetchOne = () => {
        axios
            .get(`http://localhost:8080/feeds/${localStorage.getItem('select')}`)
            .then((res) => {
                console.log(res);
                setDetail(res.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchOne();
    }, []);

    const handlDelete = useCallback(() => {
        if (window.confirm('삭제하시겠습니까?')) {
            console.log(`삭제:${detail.feedNo}`);
            axios
                .delete(`http://localhost8080/fds/list/${localStorage.getItem('select')}`)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => console.log(err));
        }
    }, [detail.feedNo]);

    return (
        // <form>
        //     <label>FeedNo</label>
        //     <input className="ragiterForm" type="text" value="detail.feedNo"></input>
        //     <label>Title</label>
        //     <input className="ragisterForm" type="text" value="detail.toitle"></input>
        //     <label>Writer</label>
        //     <input className="ragisterForm" type="text" value="detail.writer"></input>
        //     <label>Content</label>
        //     <input className="ragisterForm" type="text" value="detail.content"></input>
        //     <label>addLocation</label>
        //     <input className="ragisterForm" type="text" value="detail.addLocation"></input>
        //     <label>regDate</label>
        //     <input className="ragisterForm" type="text" value="detail.regDate"></input>
        // </form>
        <form>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>게시판 번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>본문 내용</th>
                            <th>위치</th>
                            <th>해쉬 태그</th>
                            <th>등록 일자</th>
                            <th>상세 보기</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={detail.feedNo}>
                            <td>{detail.feedNo}</td>
                            <td>{detail.title}</td>
                            <td>{detail.writer}</td>
                            <td>{detail.content}</td>
                            <td>{detail.addLocation}</td>
                            <td>{detail.regDate}</td>
                        </tr>
                    </tbody>
                </table>

                <Link to={`/FeedBoardReed/${detail.feedNo}`}>
                    <button>수정하기</button>
                </Link>
                <button method="Post" onClick={handlDelete}>
                    삭제하기
                </button>
                <Link to="/FeedBoardList">
                    <button>목록으로</button>
                </Link>
            </div>
        </form>
    );
};
export default FeedBoardRead;

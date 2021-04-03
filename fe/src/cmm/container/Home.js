import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div style={{ width: 150, margin: '0 auto' }}>
                <h1>Home</h1>
                <Link to={'/FeedBoardList'}>FeedBoardList</Link>
                <br />
                <Link to={'/FeedBoardRegister'}>FeedBoardRegister</Link>
                <br />
                <Link to={'/SignUp'}>회원가입(SignUp)</Link>
                <br />
                <Link to={'/UserDetail'}>로그인(UserDetail)</Link>
                <br />
                <Link to={'/Test'}>테스트 코드</Link>
            </div>
        </>
    );
};
export default Home;

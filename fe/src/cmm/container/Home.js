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
                <Link to={'/SignUp'}>SignUp</Link>
            </div>
        </>
    );
};
export default Home;

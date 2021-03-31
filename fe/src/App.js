import React from 'react';
import FeedBoardList from './fds/container/FeedBoardList';
import FeedBoardRegister from './fds/container/FeedBoardRegister';
import { Route } from 'react-router-dom';
import Home from './cmm/container/Home';
import FeedBoardRead from './fds/container/FeedBoardRead';
import FeedBoardUpdate from './fds/container/FeedBoardUpdate';

const App = () => {
    return (
        <>
            <Route path="/" component={Home} exact />
            <Route path="/FeedBoardList" component={FeedBoardList} />
            <br />
            <Route path="/FeedBoardRegister" component={FeedBoardRegister} />
            <br />
            <Route path="/FeedBoardRead" component={FeedBoardRead} />
            <br />
            <Route path="/FeedBoardUpdate" component={FeedBoardUpdate} />
        </>
    );
};
export default App;

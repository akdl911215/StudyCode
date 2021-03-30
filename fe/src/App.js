import React from 'react';
import FeedBoardList from './fds/list/FeedBoardList';
import FeedBoardRegister from './fds/register/FeedBoardRegister';
import { Route } from 'react-router-dom';
import Home from './cmm/container/Home';
import FeedBoardRead from './fds/list/FeedBoardRead';
import FeedBoardDelete from './fds/list/FeedBoardDelete';
import { Button } from 'reactstrap';
import axios from 'axios';

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
            <Route path="/FeedBoardDelete" component={FeedBoardDelete} />
        </>
    );
};
export default App;

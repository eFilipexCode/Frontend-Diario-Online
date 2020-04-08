import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import NewPost from './components/NewPost/NewPost.jsx';

function RoutesContent() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/diario/newpost" component={NewPost} />
            </Switch>
        </BrowserRouter>
    );
};

export default RoutesContent;
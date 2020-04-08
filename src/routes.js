import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRote.jsx';
import Home from './components/Home/Home.jsx';
import Cadastro from './components/Cadastro/Cadastro.jsx';
import Login from './components/Login/Login.jsx';
import Diario from './components/Diario/Diario.jsx';
import NewPost from './components/NewPost/NewPost.jsx';
import MyPosts from './components/MyPosts/MyPosts.jsx';
import Post from './components/Post/Post.jsx';
import PublicPosts from './components/PublicPosts/PublicPosts.jsx';
import Profile from './components/Profile/Profile.jsx';
import Picture from './components/Picture/Picture.jsx';
import Edit from './components/EditPosts/EditPosts.jsx';

function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/register" component={Cadastro} />
                <Route path="/login" component={Login} />
                <PrivateRoute path='/diario' component={Diario} />
                <PrivateRoute path="/newpost" component={NewPost} />
                <PrivateRoute path="/myposts" component={MyPosts} />
                <PrivateRoute path="/post" component={Post} />
                <PrivateRoute path="/public" component={PublicPosts} />
                <PrivateRoute path="/profile" exact component={Profile} />
                <PrivateRoute path="/profile/picture" exact component={Picture} />
                <PrivateRoute path="/edit" component={Edit} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
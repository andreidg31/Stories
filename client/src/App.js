import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import NewPost from './components/NewPost';
import Posts from './components/Posts'
import StoreProvider from './components/StoreProvider';
import MyAppBar from './components/MyAppBar';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  
  return (
    <div>
      <StoreProvider>
        <BrowserRouter>
          <MyAppBar />
          <Switch>
            <Route component={Home} exact path="/" />  
            <Route component={Login} path="/login" />  
            <Route component={Posts} path="/posts" />
            <ProtectedRoute component={NewPost} path="/newPost" />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </BrowserRouter>
      </StoreProvider>
    </div>
  );
}

export default App;

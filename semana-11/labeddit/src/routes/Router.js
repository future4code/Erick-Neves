import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomeLogin from "../Pages/HomeLogin";
import PostsDetails from "../Pages/PostsDetails";
import PostsFeed from "../Pages/PostsFeed";
import SignUp from "../Pages/SignUp";


const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomeLogin />
        </Route>
        <Route exact path="/posts">
          <PostsFeed />
        </Route>
        <Route path="/post">
          <PostsDetails />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
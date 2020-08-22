import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Header from "./Header";

// switch 는 한 번에 오직 하나의 router 만 render 하게 해준다.
import Home from "../Routes/Home";
import TV from "../Routes/TV";
import Search from "../Routes/Search";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/tv/popular" render={() => <h1> Popular </h1>} />
        <Route path="/search" exact component={Search} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
//웹 사이트에서 어느 페이지를 가든 여길 살펴볼 것이고, 만약에 아무것도
//매칭 되는 url 이 없는 경우 여기로 갈 것이다.{" "}

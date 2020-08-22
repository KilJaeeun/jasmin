import React, { Component } from "react";
import Router from "./Components/Router";
import GlobalStyles from "./Components/GlobalStyles";

class App extends Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyles />
      </>
    );
  }
}

// react 에서는 두개의 컴포넌트를 return 할 수없다는 규칙이 있어서 한 개만 해야한다.
// 그래서 fragments 라는 것을 사용할 것이다.
// fragments는 내가 원하는 만큼 컴포넌트를 return  할 수 있게 해준다.
export default App;

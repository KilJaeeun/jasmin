import React from "react";

import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
// 이 Link는 해당 페이지가 내 어플리케이션에 있으면,  그 곳으로 브라우저 한 방식으로 가지 않고
// javascript 방식으로 가게 한다.

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 50px;
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  background-color: rgba(20, 20, 20, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 5px solid
    ${(props) => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
// 이런식으로 Link에 스타일을 추가할 수도 있고,  Link 로 사용할 수 있다.

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/"> Movies </SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv"> TV </SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search"> Search </SLink>
      </Item>
    </List>
  </Header>
));
//current 는 boolean타입이다. 따라서, current 가 true 이려면, pathname 이 '/'여아한다.

import styled from "styled-components";

export const Container = styled.nav`
  border-bottom: ${props =>
    props.borderBottom ? "1px solid #04c78bfa" : "none"};
`;

export const LinkGroup = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  color: gray;
  justify-content: center;
`;

export const NavLinkGroup = styled.div`
  display: flex;
  min-width: 500px;
  justify-content: flex-start;
`;

export const LinkNav = styled.li`
  display: flex;
  list-style: none;
  margin: 0;
  border: 1px solid #757575;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom: none;
  color: #757575;
  a {
    text-decoration: none;
    color: inherit;
  }
  :hover {
    background: #04c78bfa;
    color: white;
    cursor: pointer;
  }
`;

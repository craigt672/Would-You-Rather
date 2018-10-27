import styled from "styled-components";

export const Container = styled.nav`
  box-sizing: border-box;
  border-bottom: ${props =>
    props.borderBottom ? "1px solid #04c78bfa" : "none"};
  padding: 15px 120px 0 120px;
  box-sizing: border-box;
  position: ${props => (props.fixed ? "fixed" : "static")};
  width: 100%;
  z-index: 100;
  background: white;
  top: 0;
  left: 0;
  right: 0;
`;

export const LinkGroup = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  color: gray;
  justify-content: ${props => (props.user ? "space-around" : "center")};
  width: 100%;
`;

export const NavLinkGroup = styled.div`
  display: flex;
  font-weight: ${props => (props.user ? "900" : "200")};
  padding-top: 0;
  padding-bottom: 0;
  align-items: ${props => (props.user ? "center" : "center")};
  justify-content: space-around;
  h3 {
    margin: 0;
    padding: 0px 5px;
    color: #04c78bfa;
  }
`;

export const LinkNav = styled.li`
  display: flex;
  list-style: none;
  margin: 0;
  border: ${props => (props.user ? "1px solid #757575" : "1px solid #757575")};
  border-radius: ${props => (props.user ? "5px" : "none")};
  padding: ${props => (props.user ? "5px" : "none")};
  font-size: ${props => (props.user ? "1.1em" : "1em")} !important;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom: ${props => (props.user ? "1px solid #757575" : "none")};
  color: ${props => (props.user ? "#04c78bfa" : "#757575")};

  a {
    text-decoration: none;
    color: inherit;
    margin-left: ${props => (props.user ? "5px" : "none")};
  }
  :hover {
    background: ${props => (props.user ? "none" : "#04c78bfa")};
    color: ${props => (props.user ? "none" : "white")};
    cursor: ${props => (props.user ? "none" : "pointer")};
  }
`;

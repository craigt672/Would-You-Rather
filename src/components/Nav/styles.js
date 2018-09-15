import styled from "styled-components";

export const Container = styled.nav`
  border-bottom: ${props => (props.borderBottom ? "1px solid gray" : "none")};
`;

export const LinkGroup = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  /* padding: 5px 150px 0 150px; */
  color: gray;
  justify-content: center;
`;

export const NavLinkGroup = styled.div`
  display: flex;
  min-width: 500px;
  justify-content: flex-start;
`;

export const LinkNav = styled.li`
  list-style: none;
  padding: 10px 15px;
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
    background: #757575;
    color: white;
    cursor: pointer;
  }
`;

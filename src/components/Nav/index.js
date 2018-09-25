import React from "react";
import { NavLink } from "react-router-dom";
import { Container, LinkGroup, NavLinkGroup, LinkNav } from "./styles";

const Nav = props => {
  return (
    <Container borderBottom={props.borderBottom}>
      <LinkGroup>
        <NavLinkGroup>
          {props.links.map(link => {
            return (
              <LinkNav key={link.name}>
                <NavLink
                  exact={!!props.exact}
                  to={link.path}
                  style={{ padding: "10px 15px" }}
                  activeClassName="active-link"
                >
                  {link.name}
                </NavLink>
              </LinkNav>
            );
          })}
        </NavLinkGroup>
      </LinkGroup>
    </Container>
  );
};

export default Nav;

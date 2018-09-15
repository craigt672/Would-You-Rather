import React from "react";
import { NavLink } from "react-router-dom";
import { Container, LinkGroup, NavLinkGroup, LinkNav } from "./styles";

function formatLink(link) {
  return link
    .toLowerCase()
    .trim()
    .split(" ")
    .join("");
}

const Nav = props => {
  return (
    <Container borderBottom={props.borderBottom}>
      <LinkGroup>
        <NavLinkGroup>
          {props.links.map(link => {
            return (
              <LinkNav>
                <NavLink exact to={`/${formatLink(link)}`}>
                  {link}
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

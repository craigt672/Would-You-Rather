import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Avatar } from "../Card/styles";
import { Container, LinkGroup, NavLinkGroup, LinkNav } from "./styles";
import { setAuthedUser } from "../../actions/authedUser";
import { connect } from "react-redux";

const Nav = props => {
  return (
    <Container fixed={!!props.authedUser} borderBottom={props.borderBottom}>
      <LinkGroup user>
        <NavLinkGroup>
          {props.links.map(link => (
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
          ))}
        </NavLinkGroup>

        {props.authedUser && (
          <NavLinkGroup user>
            <Avatar noBorder small>
              <img src={props.users[props.authedUser].avatarURL} />
            </Avatar>
            <h3>{`Hi ${props.users[props.authedUser].name.split(" ")[0]}`}</h3>
            <LinkNav user>
              <NavLink
                to="/"
                onClick={() => this.props.dispatch(setAuthedUser(null))}
              >
                LOG OUT
              </NavLink>
            </LinkNav>
          </NavLinkGroup>
        )}
      </LinkGroup>
    </Container>
  );
};

const mapStateToProps = ({ users }) => ({
  users
});

export default connect(mapStateToProps)(Nav);

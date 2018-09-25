import React, { Component } from "react";
import { Container, Content, Header, Avatar } from "./styles";
import { connect } from "react-redux";

class Card extends Component {
  render() {
    const { avatarUrl, title, image } = this.props;
    console.log("Avatar-Url:", avatarUrl);
    return (
      <Container>
        <Header>
          <h3>{title}</h3>
        </Header>
        <Content>
          <Avatar>
            <img src={image} />
          </Avatar>
          {this.props.children}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ users }, { author }) => ({
  avatarUrl: users[author].avatarURL,
  name: users[author].name
});

export default connect(mapStateToProps)(Card);

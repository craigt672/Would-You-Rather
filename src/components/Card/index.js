import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Content, Header, Avatar } from "./styles";

export default class Card extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  };
  render() {
    const { title, image, column } = this.props;
    return (
      <Container>
        <Header>
          <h3>{title}</h3>
        </Header>
        <Content column={!!column}>
          {image && (
            <Avatar>
              <img src={image} />
            </Avatar>
          )}
          {this.props.children}
        </Content>
      </Container>
    );
  }
}

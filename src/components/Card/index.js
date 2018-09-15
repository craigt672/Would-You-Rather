import React, { Component } from "react";
import { Container, Content, Header, Avatar } from "./styles";

class Card extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Header>
          <h3>{this.props.title}</h3>
        </Header>
        <Content>
          <Avatar>
            <img src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Default&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Brown" />
          </Avatar>
          {this.props.children}
        </Content>
      </Container>
    );
  }
}

export default Card;

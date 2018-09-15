import React, { Component } from "react";
import Nav from "../../components/Nav/index";
import Card from "../../components/Card/index";
import { Container, QuestionsContainer, QuestionBox, Title } from "./styles";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Nav links={["Unanswered Questions", "Answered Questions"]} />
        <QuestionsContainer>
          <Card title="sdfsdf">
            <QuestionBox>
              <Title>Would you rather</Title>
              <p>Some question.......</p>
              <button>View Post</button>
            </QuestionBox>
          </Card>
          <Card title="sdfsdf">
            <QuestionBox>
              <Title>Would you rather</Title>
              <p>Some question.......</p>
              <button>View Post</button>
            </QuestionBox>
          </Card>
          <Card title="sdfsdf">
            <QuestionBox>
              <Title>Would you rather</Title>
              <p>Some question.......</p>
              <button>View Post</button>
            </QuestionBox>
          </Card>
          <Card title="sdfsdf">
            <QuestionBox>
              <Title>Would you rather</Title>
              <p>Some question.......</p>
              <button>View Post</button>
            </QuestionBox>
          </Card>
        </QuestionsContainer>
      </Container>
    );
  }
}

export default Dashboard;

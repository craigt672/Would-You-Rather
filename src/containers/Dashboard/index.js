import React, { Component } from "react";
import Nav from "../../components/Nav/index";
import Card from "../../components/Card/index";
import { withRouter } from "react-router-dom";
import {
  Container,
  QuestionsContainer,
  QuestionBox,
  Title,
  Button
} from "./styles";
import { connect } from "react-redux";

class Dashboard extends Component {
  state = {};
  render() {
    console.log(this.props);
    const { users, questions } = this.props;
    return (
      <Container>
        <Nav
          exact
          links={[
            { name: "Unanswered Questions", path: "/Dashboard/unanswered" },
            { name: "Answered Questions", path: "/Dashboard/answered" }
          ]}
        />
        <QuestionsContainer>
          {this.props.questions.map(question => (
            <Card
              key={question.id}
              title={`${users[question.author].name} asks:`}
              author={question.author}
              image={users[question.author].avatarURL}
            >
              <QuestionBox>
                <Title>Would you rather</Title>
                <p>{`..${question.optionOne.text
                  .split(" ")
                  .slice(0, 3)
                  .join(" ")}...`}</p>
                <Button
                  onClick={() =>
                    this.props.history.push(`/Questions/${question.id}`)
                  }
                >
                  View Post
                </Button>
              </QuestionBox>
            </Card>
          ))}
        </QuestionsContainer>
      </Container>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users
});
export default withRouter(connect(mapStateToProps)(Dashboard));

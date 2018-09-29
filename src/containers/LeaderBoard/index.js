import React, { Component } from "react";
import { Container, ScoreBox, TotalScoreBox } from "./styles";
import Card from "../../components/Card/index";
import connect from "react-redux";

export default class LeaderBoard extends Component {
  state = {};

  numberOfCreatedQuestions(user) {
    return user.questions.length;
  }
  numberOfAnsweredQuestions(user) {
    return Object.keys(user.answers).length;
  }

  totalScore(user) {
    return (
      this.numberOfAnsweredQuestions(user) + this.numberOfCreatedQuestions(user)
    );
  }

  render() {
    const sortedUsers = this.props.users.sort(
      (userA, userB) => this.totalScore(userB) - this.totalScore(userA)
    );

    return (
      <Container>
        {this.props.users.map((user, idx) => (
          <Card
            key={user.id}
            image={user.avatarURL}
            title={`Place: ${idx + 1}`}
          >
            <ScoreBox>
              <h3>
                <span>Answered questions:</span>

                <span>{this.numberOfAnsweredQuestions(user)}</span>
              </h3>
              <h3>
                <span>Created questions:</span>

                <span>{this.numberOfCreatedQuestions(user)}</span>
              </h3>
            </ScoreBox>
            <TotalScoreBox>
              <h2>Total Score</h2>
              <div>
                <h3>{this.totalScore(user)}</h3>
              </div>
            </TotalScoreBox>
          </Card>
        ))}
      </Container>
    );
  }
}

// const mapStateToProps = ({ users }) => ({
//   users: Object.values.sort
// });

// connect()(LeaderBoard);

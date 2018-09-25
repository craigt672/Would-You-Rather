import React, { Component } from "react";
import Card from "../../components/Card/index";
import { withRouter } from "react-router-dom";
import {
  Container,
  QuestionsContainer,
  QuestionBox,
  Title
} from "../Dashboard/styles";
import { connect } from "react-redux";

class QuestionPage extends Component {
  state = {};
  render() {
    const { users, questions, match } = this.props;
    const { questionId } = match.params;
    const question = questions[questionId];
    console.log(this.props);
    return (
      <div style={{ maxWidth: "600px", margin: "20px auto" }}>
        <Card
          key={questionId}
          title={`Asked by ${users[question.author].name} :`}
          author={question.author}
          image={users[question.author].avatarURL}
          style={{ margin: "auto" }}
        >
          <QuestionBox>
            <Title>Results:</Title>
            <p>{`Would you rather ${question.optionOne.text}?`}</p>
            <p>{`Would you rather ${question.optionTwo.text}?`}</p>
          </QuestionBox>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = ({ users, questions }) => ({
  questions,
  users
});
export default withRouter(connect(mapStateToProps)(QuestionPage));

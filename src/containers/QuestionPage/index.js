import React, { Component } from "react";
import Card from "../../components/Card/index";
import { withRouter } from "react-router-dom";
import { QuestionBox, Button, Title } from "../Dashboard/styles";
import { connect } from "react-redux";
import { addVote } from "../../actions/questions";
import { saveAnswer } from "../../actions/users";
import { containsAuthor } from "../../utils/helpers";
import VoteCard from "../../components/VoteCard";
import { handleSaveAnswer } from "../../actions/shared";

class QuestionPage extends Component {
  state = {
    selectedOption: "optionOne"
  };

  handleOptionChange = e => {
    this.setState({
      selectedOption: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    const { dispatch, match } = this.props;
    const { questionId } = match.params;
    const option = this.state.selectedOption;
    dispatch(handleSaveAnswer(questionId, option));
  };

  render() {
    const { users, questions, authedUser, match } = this.props;
    const { questionId } = match.params;
    const question = questions[questionId];
    console.log(question);
    return (
      <div style={{ maxWidth: "600px", margin: "60px auto" }}>
        <Card
          key={questionId}
          title={`Asked by ${users[question.author].name} :`}
          author={question.author}
          image={users[question.author].avatarURL}
          style={{ margin: "auto" }}
        >
          <QuestionBox>
            <Title>Results:</Title>
            {containsAuthor(question, authedUser) ? (
              <div>
                <VoteCard
                  voted={question.optionOne.votes.includes(authedUser)}
                  votes={question.optionOne.votes.length}
                  totalVotes={
                    question.optionOne.votes.length +
                    question.optionTwo.votes.length
                  }
                  question={question.optionOne.text}
                />
                <VoteCard
                  voted={question.optionTwo.votes.includes(authedUser)}
                  votes={question.optionTwo.votes.length}
                  totalVotes={
                    question.optionOne.votes.length +
                    question.optionTwo.votes.length
                  }
                  question={question.optionTwo.text}
                />
              </div>
            ) : (
              <form onSubmit={this.submitHandler}>
                <label>
                  <input
                    type="radio"
                    value="optionOne"
                    name="optionOne"
                    checked={this.state.selectedOption === "optionOne"}
                    onChange={this.handleOptionChange}
                  />
                  {`Would you rather ${question.optionOne.text}?`}
                </label>
                <label>
                  <input
                    type="radio"
                    value="optionTwo"
                    name="optionTwo"
                    checked={this.state.selectedOption === "optionTwo"}
                    onChange={this.handleOptionChange}
                  />
                  {`Would you rather ${question.optionTwo.text}?`}
                </label>
                <Button>Submit</Button>
              </form>
            )}
          </QuestionBox>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = ({ users, questions, authedUser }) => ({
  questions,
  users,
  authedUser
});
export default withRouter(connect(mapStateToProps)(QuestionPage));

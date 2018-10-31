import React, { Component } from "react";
import Card from "../../components/Card/index";
import { withRouter, Redirect } from "react-router-dom";
import { QuestionBox, Button, Title } from "../Dashboard/styles";
import { connect } from "react-redux";
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
    const question = questions
      .filter(question => question.id === questionId)
      .pop();

    if (!question) {
      return <Redirect to="/404" />;
    }
    const user = users.filter(user => user.id === question.author).pop();
    console.log(questions);
    console.log(questionId);
    console.log(question);
    console.log(this.props);
    return (
      <div style={{ maxWidth: "600px", margin: "60px auto" }}>
        <Card
          key={questionId}
          title={`Asked by ${user.name} :`}
          author={question.author}
          image={user.avatarURL}
          style={{ margin: "auto" }}
        >
          <QuestionBox>
            {containsAuthor(question, authedUser) ? (
              <div>
                <Title>Results:</Title>
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
                <h2>Would you rather...</h2>
                <label>
                  <input
                    type="radio"
                    value="optionOne"
                    name="optionOne"
                    checked={this.state.selectedOption === "optionOne"}
                    onChange={this.handleOptionChange}
                  />
                  {question.optionOne.text}
                </label>
                <label>
                  <input
                    type="radio"
                    value="optionTwo"
                    name="optionTwo"
                    checked={this.state.selectedOption === "optionTwo"}
                    onChange={this.handleOptionChange}
                  />
                  {question.optionTwo.text}
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

// const mapStateToProps = ({ users, questions }) => ({
//   questions,
//   users
// });
export default withRouter(connect()(QuestionPage));

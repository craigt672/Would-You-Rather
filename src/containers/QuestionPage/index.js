import React, { Component } from "react";
import Card from "../../components/Card/index";
import { withRouter } from "react-router-dom";
import {
  Container,
  QuestionsContainer,
  QuestionBox,
  Button,
  Title
} from "../Dashboard/styles";
import { connect } from "react-redux";

class QuestionPage extends Component {
  state = {
    selectedOption: "optionOne"
  };

  handleOptionChange = e => {
    this.setState({
      selectedOption: e.target.value
    });
  };

  submitHandler = () => {
    const { users, questions, match } = this.props;
    const { questionId } = match.params;
    const question = questions[questionId];
  };

  render() {
    const { users, questions, match } = this.props;
    const { questionId } = match.params;
    const question = questions[questionId];
    console.log(question);
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

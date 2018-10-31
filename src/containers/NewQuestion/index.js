import React, { Component } from "react";
import Card from "../../components/Card/index";
import { withRouter } from "react-router-dom";
import { Button } from "../Dashboard/styles";
import { connect } from "react-redux";
import { handleAddQuestion } from "../../actions/questions";
import { Form } from "./styles";

class NewQuestionPage extends Component {
  state = {
    optionOne: "",
    optionTwo: ""
  };

  handleOptionOneChange = e => {
    this.setState({
      optionOne: e.target.value
    });
  };

  handleOptionTwoChange = e => {
    this.setState({
      optionTwo: e.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    const { dispatch } = this.props;
    const { optionOne, optionTwo } = this.state;
    this.props.history.push("/dashboard");
    dispatch(handleAddQuestion({ optionOne, optionTwo }));
  };

  render() {
    const { questions, match } = this.props;
    const { optionOne, optionTwo } = this.state;
    const { questionId } = match.params;
    const question = questions[questionId];
    console.log(question);
    return (
      <div style={{ maxWidth: "600px", margin: "60px auto" }}>
        <Card
          key={questionId}
          title={`Create New Question`}
          style={{ margin: "auto" }}
        >
          <Form onSubmit={this.submitHandler}>
            <h4>Complete the question:</h4>
            <h2>Would you rather ...</h2>

            <input
              type="text"
              value={optionOne}
              placeholder="Enter Option One Text Here"
              name="optionOne"
              onChange={this.handleOptionOneChange}
            />

            <p>OR</p>
            <input
              type="text"
              value={optionTwo}
              placeholder="Enter Option Two Text Here"
              name="optionTwo"
              onChange={this.handleOptionTwoChange}
            />
            <Button disabled={!optionOne || !optionTwo}>Submit</Button>
          </Form>
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
export default withRouter(connect(mapStateToProps)(NewQuestionPage));

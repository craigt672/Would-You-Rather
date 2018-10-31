import React, { Component } from "react";
import { Container } from "./styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Card from "../../components/Card";
import { Button } from "../Dashboard/styles";
import { setAuthedUser } from "../../actions/authedUser";

class LoginPage extends Component {
  state = {
    userId: "sarahedo"
  };

  changeUserHandler = e => {
    const { value } = e.target;
    this.setState({ userId: value });
  };

  loginHandler = e => {
    e.preventDefault();
    const authedId = this.state.userId;
    const { error, dispatch, history } = this.props;
    dispatch(setAuthedUser(authedId));
    console.log(authedId);
    error ? history.goForward() : this.props.history.push("/");
  };

  render() {
    const { error } = this.props;
    console.log(error);
    return (
      <Container>
        <Card column title="Login">
          {error ? <h1>{error}</h1> : null}
          <h2>Would You Rather?</h2>
          <form onSubmit={this.loginHandler}>
            <img
              alt="React_logo "
              src="https://image.ibb.co/j4HU3e/react_redux.jpg"
            />
            <select onChange={this.changeUserHandler} value={this.state.userId}>
              {this.props.users.map(user => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
            <Button>Log In</Button>
          </form>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users: Object.values(users)
});
export default withRouter(connect(mapStateToProps)(LoginPage));

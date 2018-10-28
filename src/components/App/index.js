import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Nav from "../Nav/index";
import Dashboard from "../../containers/Dashboard/index";
import LoginPage from "../../containers/LoginPage/index";
import LeaderBoard from "../../containers/LeaderBoard/index";
import noMatch from "../../containers/404";
import handleInitialData from "../../actions/shared";
import { Container } from "./styles";
import { connect } from "react-redux";
import QuestionPage from "../../containers/QuestionPage";
import { containsAuthor } from "../../utils/helpers";
import NewQuestion from "../../containers/NewQuestion";

class App extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.dispatch(handleInitialData());
  }

  render() {
    console.log(this.props);
    const { authedUser, questions, users } = this.props;

    const answered = questions.filter(question =>
      containsAuthor(question, authedUser)
    );
    const unAnswered = questions.filter(
      question => !containsAuthor(question, authedUser)
    );

    return (
      <Router>
        <Container>
          <Nav
            borderBottom
            links={[
              { name: "Home", path: "/dashboard" },
              { name: "New Question", path: "/add" },
              { name: "Leader Board", path: "/leaderboard" }
            ]}
            authedUser={authedUser}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={() =>
                !!authedUser ? (
                  <Redirect push to="/dashboard/unanswered" />
                ) : (
                  <LoginPage />
                )
              }
            />

            <Route
              exact
              path="/questions/:questionId"
              render={() =>
                !!authedUser ? <QuestionPage /> : <Redirect push to="/" />
              }
            />

            <Route
              exact
              path="/add"
              render={() =>
                !!authedUser ? <NewQuestion /> : <Redirect push to="/" />
              }
            />

            <Route exact path="/dashboard" render={() => <Redirect to="/" />} />

            <Route
              exact
              path="/dashboard/unanswered"
              render={() =>
                !!authedUser ? (
                  <Dashboard questions={unAnswered} />
                ) : (
                  <LoginPage />
                )
              }
            />

            <Route
              exact
              path="/dashboard/answered"
              render={() =>
                !!authedUser ? (
                  <Dashboard answered questions={answered} />
                ) : (
                  <LoginPage />
                )
              }
            />

            <Route
              exact
              path="/leaderboard"
              render={() => <LeaderBoard users={users} />}
            />

            <Route exact path="/login" render={() => <LoginPage />} />
            <Route component={noMatch} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

const mapStateToProps = ({ users, questions, authedUser }) => ({
  users: Object.values(users),
  questions: Object.values(questions).sort((a, b) => b.timestamp - a.timestamp),
  authedUser
});

export default connect(mapStateToProps)(App);

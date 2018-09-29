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

class App extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.dispatch(handleInitialData());
  }

  render() {
    console.log(this.props);
    const { authedUser: loggedIn, questions, users } = this.props;

    function containsAuthor(question) {
      return (
        question.optionOne.votes.includes(loggedIn) ||
        question.optionTwo.votes.includes(loggedIn)
      );
    }
    const answered = questions.filter(question => containsAuthor(question));
    const unAnswered = questions.filter(question => !containsAuthor(question));

    return (
      <Router>
        <Container>
          <Nav
            borderBottom
            links={[
              { name: "Home", path: "/Dashboard" },
              { name: "New Question", path: "/NewQuestion" },
              { name: "Leader Board", path: "/LeaderBoard" }
            ]}
            authedUser={loggedIn}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={() =>
                !!loggedIn ? (
                  <Redirect push to="/Dashboard/unanswered" />
                ) : (
                  <LoginPage />
                )
              }
            />

            <Route
              exact
              path="/Questions/:questionId"
              render={() => <QuestionPage />}
            />

            <Route exact path="/Dashboard" render={() => <Redirect to="/" />} />
            <Route
              exact
              path="/Dashboard/unanswered"
              render={() => <Dashboard questions={unAnswered} />}
            />
            <Route
              exact
              path="/Dashboard/answered"
              render={() => <Dashboard questions={answered} />}
            />

            <Route
              exact
              path="/Leaderboard"
              render={() => <LeaderBoard users={users} />}
            />

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
  authedUser: "craigthomas"
});

export default connect(mapStateToProps)(App);

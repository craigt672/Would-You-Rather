import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "../Nav/index";
import Dashboard from "../../containers/Dashboard";
import { Container } from "./styles";

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Nav borderBottom links={["Home", "New Question", "Leader Board"]} />
          <Dashboard />
        </Container>
      </Router>
    );
  }
}

export default App;

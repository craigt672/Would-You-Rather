import React, { Component } from "react";
import { connect } from "react-redux";

class LoginPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>LoginPage</h1>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users
});
export default connect(mapStateToProps)(LoginPage);

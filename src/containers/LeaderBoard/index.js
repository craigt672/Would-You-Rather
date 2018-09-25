import React, { Component } from "react";
import { connect } from "react-redux";

class LeaderBoard extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>LeaaderBoard</h1>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users
});
export default connect(mapStateToProps)(LeaderBoard);

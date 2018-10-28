import React, { Component } from "react";
import { Container, PercentageBar, VoteStamp } from "./styles";

export default class VoteCard extends Component {
  render() {
    const { votes, totalVotes, question, voted } = this.props;
    const percentage = (votes / totalVotes).toFixed(4) * 100;

    return (
      <Container voted={voted}>
        {voted ? <VoteStamp>Your Vote</VoteStamp> : null}
        <h4>{`Would you rather ${question}?`}</h4>
        <PercentageBar width={percentage}>
          <li>{`${percentage}%`}</li>
        </PercentageBar>
        <p>{`${votes} out of ${totalVotes} votes`}</p>
      </Container>
    );
  }
}

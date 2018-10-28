export function containsAuthor(question, authedUser) {
  return (
    question.optionOne.votes.includes(authedUser) ||
    question.optionTwo.votes.includes(authedUser)
  );
}

export const RECIEVE_QUESTIONS = "RECIEVE_QUESTIONS";
export const SUBMIT_VOTE = "SUBMIT_VOTE";

export function receiveQuestions(questions) {
  return {
    type: RECIEVE_QUESTIONS,
    questions
  };
}

export function submitVote(userId, questionId, option) {
  return {
    type: SUBMIT_VOTE,
    userId,
    questionId,
    option
  };
}

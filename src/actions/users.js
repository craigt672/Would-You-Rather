export const RECEIVE_USERS = "RECEIVE_USERS";
export const SUBMIT_ANSWER = "SUBMIT_ANSWER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}

export function saveAnswer(userId, questionId, option) {
  return {
    type: SUBMIT_ANSWER,
    userId,
    questionId,
    option
  };
}
